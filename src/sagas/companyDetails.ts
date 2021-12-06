import axios, { AxiosResponse } from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { API_KEY } from "../configs/alphaVantage.config";
import {
  CompanyDetailsAction,
  fetchCompanyDetailsFailure,
  fetchCompanyDetailsSuccess,
} from "../state/companyDetails/companyDetails.actionCreators";
import { FETCH_COMPANY_DETAILS_REQUEST } from "../state/companyDetails/companyDetails.actionTypes";
import {
  CompanyDetails,
  CompanyDetailsApiResponse,
} from "../types/companyDetails";

const fetchCompanyDetails = (companySymbol: string) =>
  axios.get<CompanyDetailsApiResponse>(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${companySymbol}&apikey=${API_KEY}`
  );

function* fetchCompanyDetailsSaga(action: CompanyDetailsAction) {
  try {
    const response: AxiosResponse<CompanyDetailsApiResponse> = yield call(
      fetchCompanyDetails,
      action.payload
    );

    const fetchedData = response.data;

    const companyDetailsNeededFromApi: CompanyDetails = {
      name: fetchedData["Name"],
      address: fetchedData["Address"],
      marketCap: fetchedData["MarketCapitalization"],
      description: fetchedData["Description"],
    };

    yield put(fetchCompanyDetailsSuccess(companyDetailsNeededFromApi));
  } catch (error) {
    yield put(fetchCompanyDetailsFailure(error));
  }
}

function* companyDetailsSaga() {
  yield all([
    takeEvery(FETCH_COMPANY_DETAILS_REQUEST, fetchCompanyDetailsSaga),
  ]);
}

export default companyDetailsSaga;
