import { watchGetItem } from "./typicodeSaga";
import { all } from "redux-saga/effects";

export function* mySaga() {
  yield all([watchGetItem()]);
}
