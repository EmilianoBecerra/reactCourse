import { put, takeLatest } from "redux-saga/effects";
import { SHOW_PRODUCT_VALUE } from "../3_types";
import axios from "axios";
import { seeProductValue } from "../2_actions";

function* showProductValueWorker() {
  
  const { data: response } =  yield axios('https://650af169dfd73d1fab093f01.mockapi.io/api/products');
  const getProduct = response[0].price.replace('.',',');
  yield put(seeProductValue(getProduct))

}

export function* showProductWatcher() {
  yield takeLatest(SHOW_PRODUCT_VALUE, showProductValueWorker);
}
