import { takeLatest, call, put, takeEvery } from "redux-saga/effects";
import IpfsHandler from "../api/ipfs";
const IPFS = new IpfsHandler();

// Initial State
const initialState = {
  connState: "offline",
  stats: {
    state: "pending"
  },
  currFiles: {
    state: "",
    files: []
  }
};

// Actions
const CREATE_INSTANCE = "nebula/ipfs/CREATE_INSTANCE";
const CREATE_INSTANCE_SUCCESS = "nebula/ipfs/CREATE_INSTANCE_SUCCESS";
const CREATE_INSTANCE_FAILURE = "nebula/ipfs/CREATE_INSTANCE_FAILURE";

const GET_NODE_STATS = "nebula/ipfs/GET_NODE_STATS";
const GET_NODE_STATS_SUCCESS = "nebula/ipfs/GET_NODE_STATS_SUCCESS";
const GET_NODE_STATS_FAILURE = "nebula/ipfs/GET_NODE_STATS_FAILURE";

const GET_PATH_INFO = "nebula/ipfs/GET_PATH_INFO";
const GET_PATH_INFO_SUCCESS = "nebula/ipfs/GET_PATH_INFO_SUCCESS";
const GET_PATH_INFO_FAILURE = "nebula/ipfs/GET_PATH_INFO_FAILURE";

// Action Creators
export function createIpfsInstance() {
  return { type: CREATE_INSTANCE };
}

export function getPathInfo(path) {
  return { type: GET_PATH_INFO, path };
}

export function getIpfsNodeStats() {
  return { type: GET_NODE_STATS };
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_INSTANCE:
      return { ...state, connState: "connecting" };
    case CREATE_INSTANCE_SUCCESS:
      return { ...state, connState: "connected" };
    case CREATE_INSTANCE_FAILURE:
      return { ...state, connState: "failed" };
    case GET_PATH_INFO:
      return { ...state, currFiles: { state: "loading", files: [] } };
    case GET_PATH_INFO_SUCCESS:
      return { ...state, currFiles: { state: "loaded", files: [action.data] } };
    case GET_PATH_INFO_FAILURE:
      return { ...state, currFiles: { state: "failed", files: [] } };
    case GET_NODE_STATS:
      return { ...state, stats: { state: "loading", data: {} } };
    case GET_NODE_STATS_SUCCESS:
      return { ...state, stats: { state: "loaded", data: action.data } };
    case GET_NODE_STATS_FAILURE:
      return { ...state, stats: { state: "failed", data: {} } };
    default:
      return state;
  }
}

// side effects
export function* ipfsWatchers() {
  yield takeLatest(CREATE_INSTANCE, createIpfsInstanceWorker);
  yield takeLatest(GET_NODE_STATS, getNodeStatsWorker);
  yield takeEvery(GET_PATH_INFO, getPathInfoWorker);

  // Re-run node stats worker on successful stats load
  yield takeLatest(GET_NODE_STATS_SUCCESS, getNodeStatsWorker);
}
export function* createIpfsInstanceWorker() {
  try {
    yield call(IPFS.createNode);
    yield put({ type: CREATE_INSTANCE_SUCCESS });
    yield put({ type: GET_NODE_STATS });
  } catch (e) {
    yield put({ type: CREATE_INSTANCE_FAILURE });
  }
}

export function* getPathInfoWorker(action) {
  try {
    const data = yield call(IPFS.listDirectory, action.path);
    yield put({ type: GET_PATH_INFO_SUCCESS, data });
  } catch (e) {
    yield put({ type: GET_PATH_INFO_FAILURE, error: e });
  }
}

function* getNodeStatsWorker() {
  try {
    yield call(delay, 2000);
    const data = yield call(IPFS.getStats);
    yield put({ type: GET_NODE_STATS_SUCCESS, data });
  } catch (e) {
    yield put({ type: GET_NODE_STATS_FAILURE, error: e });
  }
}

// helper methods
// Utility function to delay effects
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(true), ms);
  });
}
