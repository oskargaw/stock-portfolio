import { all } from "redux-saga/effects";
import companyDetailsSaga from "./companyDetails";
import stocksSaga from "./stocks";

function* rootSaga() {
  yield all([stocksSaga(), companyDetailsSaga()]);
}

export default rootSaga;
