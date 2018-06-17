//
import { takeLatest, call, put } from "redux-saga/effects";
import IpfsHandler from "../api/ipfs";
import Logger from "../util/logger";

const IPFS = new IpfsHandler();

// State Type Definitions

// Initial State
const initialState = {
  connState: "offline"
};

// Actions
const CREATE_INSTANCE = "nebula/ipfs/CREATE_INSTANCE";
const CREATE_INSTANCE_SUCCESS = "nebula/ipfs/CREATE_INSTANCE_SUCCESS";
const CREATE_INSTANCE_FAILURE = "nebula/ipfs/CREATE_INSTANCE_FAILURE";

// Action Creators
export function createIpfsInstance() {
  return { type: CREATE_INSTANCE };
}

// Action Creator Type Definitions

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_INSTANCE:
      return { connState: "connecting" };
    case CREATE_INSTANCE_SUCCESS:
      return { connState: "connected" };
    case CREATE_INSTANCE_FAILURE:
      return { connState: "failed" };
    default:
      return state;
  }
}

// side effects
export function* createIpfsInstanceWatcher() {
  yield takeLatest(CREATE_INSTANCE, createIpfsInstanceWorker);
}

export function* createIpfsInstanceWorker() {
  try {
    yield call(IPFS.createNode);
    yield put({ type: CREATE_INSTANCE_SUCCESS });
  } catch (e) {
    yield put({ type: CREATE_INSTANCE_FAILURE });
  }
}
