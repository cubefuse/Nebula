import { takeLatest, call, put } from "redux-saga/effects";
import IpfsHandler from "../api/ipfs";
import Logger from "../util/logger";

const IPFS = new IpfsHandler();

// Actions
const CREATE_INSTANCE = "nebula/ipfs/CREATE_INSTANCE";
const CREATE_INSTANCE_SUCCESS = "nebula/ipfs/CREATE_INSTANCE_SUCCESS";
const CREATE_INSTANCE_FAILURE = "nebula/ipfs/CREATE_INSTANCE_FAILURE";

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}

// Action Creators
export function createIpfsInstance() {
  return { type: CREATE_INSTANCE };
}

// side effects
export function* createIpfsInstanceWatcher() {
  Logger.info("Watcher Started");
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
