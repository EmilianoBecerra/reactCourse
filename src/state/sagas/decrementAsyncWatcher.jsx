import { put, /*  takeLatest, */ takeEvery } from "redux-saga/effects";
import { DECREMENT_COUNTER_ASYNC } from "../3_types";
import { accDecrement } from "../2_actions";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* decrementarWorker(action) {
  yield delay(2000);
  yield put(accDecrement(action.param));
}

export function* decrementarWatcher() {
  yield takeEvery(DECREMENT_COUNTER_ASYNC, decrementarWorker);
}
