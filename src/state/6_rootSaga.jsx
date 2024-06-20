import { all } from "redux-saga/effects";
import { incrementWatcher } from "./sagas/incrementAsyncWatcher";
import { decrementarWatcher } from "./sagas/decrementAsyncWatcher";
import { showProductWatcher } from "./sagas/showProductWatcher";


export function* rootSaga() {
  yield all([
    incrementWatcher(),
    decrementarWatcher(),
    showProductWatcher(),
  ]);
}
