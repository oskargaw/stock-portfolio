export interface CompanyDetails {
  name: string;
  address: string;
  marketCap: string;
  description: string;
}

export interface CompanyDetailsApiResponse {
  "50DayMovingAverage": string;
  "52WeekHigh": string;
  "52WeekLow": string;
  "200DayMovingAverage": string;
  Address: string;
  AnalystTargetPrice: string;
  AssetType: string;
  Beta: string;
  BookValue: string;
  CIK: string;
  Country: string;
  Currency: string;
  Description: string;
  DilutedEPSTTM: string;
  DividendDate: string;
  DividendPerShare: string;
  DividendYield: string;
  EBITDA: string;
  EPS: string;
  EVToEBITDA: string;
  EVToRevenue: string;
  ExDividendDate: string;
  Exchange: string;
  FiscalYearEnd: string;
  ForwardPE: string;
  GrossProfitTTM: string;
  Industry: string;
  LatestQuarter: string;
  MarketCapitalization: string;
  Name: string;
  OperatingMarginTTM: string;
  PEGRatio: string;
  PERatio: string;
  PriceToBookRatio: string;
  PriceToSalesRatioTTM: string;
  ProfitMargin: string;
  QuarterlyEarningsGrowthYOY: string;
  QuarterlyRevenueGrowthYOY: string;
  ReturnOnAssetsTTM: string;
  ReturnOnEquityTTM: string;
  RevenuePerShareTTM: string;
  RevenueTTM: string;
  Sector: string;
  SharesOutstanding: string;
  Symbol: string;
  TrailingPE: string;
}

export interface CompanyDetailsState {
  pending: boolean;
  error: string | null;
  companyDetails: CompanyDetails;
}
