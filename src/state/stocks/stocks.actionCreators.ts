import { Stock } from "../../types/stocks";
import {
  ADD_STOCK_TO_PORTFOLIO,
  DELETE_STOCK_FROM_PORTFOLIO,
  FETCH_STOCKS_FAILURE,
  FETCH_STOCKS_REQUEST,
  FETCH_STOCKS_SUCCESS,
} from "./stocks.actionTypes";

export const fetchStocksRequest = (searchInputValue: string) => ({
  type: FETCH_STOCKS_REQUEST,
  payload: searchInputValue,
});

export const fetchStocksSuccess = (stocks: Stock[]) => ({
  type: FETCH_STOCKS_SUCCESS,
  payload: stocks,
});

export const fetchStocksFailure = (error: any) => ({
  type: FETCH_STOCKS_FAILURE,
  payload: error,
});

export const addStockToPortfolio = (stock: Stock) => ({
  type: ADD_STOCK_TO_PORTFOLIO,
  payload: stock,
});

export const deleteStockFromPortfolio = (stockSymbol: string) => ({
  type: DELETE_STOCK_FROM_PORTFOLIO,
  payload: stockSymbol,
});

export type StocksAction = ReturnType<
  | typeof fetchStocksRequest
  | typeof fetchStocksSuccess
  | typeof fetchStocksFailure
  | typeof addStockToPortfolio
  | typeof deleteStockFromPortfolio
>;
