export interface Stock {
  "1. symbol": string;
  "2. name": string;
  "3. type": string;
  "4. region": string;
  "5. marketOpen": string;
  "6. marketClose": string;
  "7. timezone": string;
  "8. currency": string;
  "9. matchScore": string;
}

export interface StockApiResponse {
  bestMatches: Stock[];
}

export interface FetchedStocks {
  pending: boolean;
  error: string | null;
  stockList: Stock[];
}

export interface StocksInPortfolio {
  stockList: Stock[];
}

export interface StocksState {
  fetchedStocks: FetchedStocks;
  stocksInPortfolio: StocksInPortfolio;
}
