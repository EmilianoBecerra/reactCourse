import { put, takeEvery } from "redux-saga/effects";
import { INCREMENT_COUNTER_ASYNC } from "../3_types";
import { accIncrement } from "../2_actions";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* incrementarWorker(action) {
  yield delay(2000);
  yield put(accIncrement(action.param));
}

export function* incrementWatcher() {
  yield takeEvery(INCREMENT_COUNTER_ASYNC, incrementarWorker);
}
