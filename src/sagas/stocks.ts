import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { API_KEY } from "../configs/alphaVantage.config";
import {
  fetchStocksFailure,
  fetchStocksSuccess,
  StocksAction,
} from "../state/stocks/stocks.actionCreators";
import { FETCH_STOCKS_REQUEST } from "../state/stocks/stocks.actionTypes";
import { StockApiResponse } from "../types/stocks";

const fetchStocks = (searchInputValue: string) =>
  axios.get<StockApiResponse>(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInputValue}&apikey=${API_KEY}`
  );

function* fetchStocksSaga(action: StocksAction) {
  try {
    const response: AxiosResponse<StockApiResponse> = yield call(
      fetchStocks,
      action.payload
    );

    yield put(fetchStocksSuccess(response.data.bestMatches));
  } catch (error) {
    yield put(fetchStocksFailure(error));
  }
}

function* stocksSaga() {
  yield all([takeLatest(FETCH_STOCKS_REQUEST, fetchStocksSaga)]);
}

export default stocksSaga;
