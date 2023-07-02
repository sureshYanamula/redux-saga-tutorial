import { call, put, takeEvery, all } from "redux-saga/effects";
import { userData } from "../functions/userData";

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* getCartItems(action) {
  try {
    const response = yield call(userData);
    console.log("getCartItems", response);
    yield put({ type: "USER_SUCCESS", payload: response.data });
  } catch (err) {
    yield put({ type: "USER_FAILURE", payload: [] });
  }
}

function* watchGetItem() {
  yield takeEvery("USER_PENDING", getCartItems);
}

export function* mySaga() {
  yield all([watchGetItem()]);
}
