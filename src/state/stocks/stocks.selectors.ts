import { RootState } from "../rootReducer";

export const getFetchedStocks = (state: RootState) =>
  state.stocks.fetchedStocks;

export const getStocksInPortfolio = (state: RootState) =>
  state.stocks.stocksInPortfolio.stockList;
