import { combineReducers } from "redux";
import { companyDetailsReducer } from "./companyDetails/companyDetails.reducer";
import { stocksReducer } from "./stocks/stocks.reducer";

const rootReducer = combineReducers({
  stocks: stocksReducer,
  companyDetails: companyDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
