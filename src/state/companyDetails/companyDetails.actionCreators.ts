import { CompanyDetails } from "../../types/companyDetails";
import { FETCH_STOCKS_FAILURE } from "../stocks/stocks.actionTypes";
import {
  FETCH_COMPANY_DETAILS_REQUEST,
  FETCH_COMPANY_DETAILS_SUCCESS,
} from "./companyDetails.actionTypes";

export const fetchCompanyDetailsRequest = (companySymbol: string) => ({
  type: FETCH_COMPANY_DETAILS_REQUEST,
  payload: companySymbol,
});

export const fetchCompanyDetailsSuccess = (companyDetails: CompanyDetails) => ({
  type: FETCH_COMPANY_DETAILS_SUCCESS,
  payload: companyDetails,
});

export const fetchCompanyDetailsFailure = (error: any) => ({
  type: FETCH_STOCKS_FAILURE,
  payload: error,
});

export type CompanyDetailsAction = ReturnType<
  | typeof fetchCompanyDetailsRequest
  | typeof fetchCompanyDetailsSuccess
  | typeof fetchCompanyDetailsFailure
>;
