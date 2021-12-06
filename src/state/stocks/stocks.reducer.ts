import { Stock, StocksState } from "../../types/stocks";
import { StocksAction } from "./stocks.actionCreators";
import {
  ADD_STOCK_TO_PORTFOLIO,
  DELETE_STOCK_FROM_PORTFOLIO,
  FETCH_STOCKS_FAILURE,
  FETCH_STOCKS_REQUEST,
  FETCH_STOCKS_SUCCESS,
} from "./stocks.actionTypes";

const initialState: StocksState = {
  fetchedStocks: {
    pending: false,
    error: null,
    stockList: [],
  },
  stocksInPortfolio: {
    stockList: [],
  },
};

export const stocksReducer = (
  state: StocksState = initialState,
  action: StocksAction
) => {
  switch (action.type) {
    case FETCH_STOCKS_REQUEST:
      return {
        ...state,
        fetchedStocks: {
          ...state.fetchedStocks,
          pending: true,
        },
      };
    case FETCH_STOCKS_SUCCESS:
      return {
        ...state,
        fetchedStocks: {
          pending: false,
          error: null,
          stockList: action.payload,
        },
      };
    case FETCH_STOCKS_FAILURE:
      return {
        ...state,
        fetchedStocks: {
          pending: false,
          error: action.payload,
          stockList: [],
        },
      };
    case ADD_STOCK_TO_PORTFOLIO:
      return {
        ...state,
        stocksInPortfolio: {
          stockList: [...state.stocksInPortfolio.stockList, action.payload],
        },
      };
    case DELETE_STOCK_FROM_PORTFOLIO:
      const filteredStocks = state.stocksInPortfolio.stockList.filter(
        (stock: Stock) => stock["1. symbol"] !== action.payload
      );

      return {
        ...state,
        stocksInPortfolio: {
          stockList: filteredStocks,
        },
      };
    default:
      return state;
  }
};
