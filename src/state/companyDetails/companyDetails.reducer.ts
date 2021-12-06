import { CompanyDetailsState } from "../../types/companyDetails";
import { FETCH_STOCKS_FAILURE } from "../stocks/stocks.actionTypes";
import { CompanyDetailsAction } from "./companyDetails.actionCreators";
import {
  FETCH_COMPANY_DETAILS_REQUEST,
  FETCH_COMPANY_DETAILS_SUCCESS,
} from "./companyDetails.actionTypes";

const initialState: CompanyDetailsState = {
  pending: false,
  error: null,
  companyDetails: {
    name: "",
    address: "",
    marketCap: "",
    description: "",
  },
};

export const companyDetailsReducer = (
  state: CompanyDetailsState = initialState,
  action: CompanyDetailsAction
) => {
  switch (action.type) {
    case FETCH_COMPANY_DETAILS_REQUEST:
      return {
        ...state,
        pending: true,
        ...state.companyDetails,
      };
    case FETCH_COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        companyDetails: action.payload,
      };
    case FETCH_STOCKS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
        ...state.companyDetails,
      };
    default:
      return state;
  }
};
