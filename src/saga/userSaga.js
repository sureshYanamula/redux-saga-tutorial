import { call, put, takeEvery, all } from "redux-saga/effects";
import { userData } from "../functions/userData";

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* getCartItems(action) {
  const response = yield call(userData);
  console.log("getCartItems", response);
  yield put({ type: "LOGGED_IN_USER", payload: response.data });
}

function* watchGetItem() {
  yield takeEvery("LOGOUT", getCartItems);
}

export function* mySaga() {
  yield all([watchGetItem()]);
}
