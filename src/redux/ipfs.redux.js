// @flow
import { takeLatest, call, put } from "redux-saga/effects";
import IpfsHandler from "../api/ipfs";
import Logger from "../util/logger";

const IPFS = new IpfsHandler();

// State Type Definitions
type State = {
  +connState: string
};

// Initial State
const initialState: State = {
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
type Action = { type: "nebula/ipfs/CREATE_INSTANCE" };

// Reducer
export default function reducer(
  state: State = initialState,
  action: Action
): State {
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
export function* createIpfsInstanceWatcher(): any {
  yield takeLatest(CREATE_INSTANCE, createIpfsInstanceWorker);
}

export function* createIpfsInstanceWorker(): any {
  try {
    yield call(IPFS.createNode);
    yield put({ type: CREATE_INSTANCE_SUCCESS });
  } catch (e) {
    yield put({ type: CREATE_INSTANCE_FAILURE });
  }
}
