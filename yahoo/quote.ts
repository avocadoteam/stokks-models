export interface SymbolGeneralInfo {
  regularMarketChange: number;
  regularMarketPrice: number;
  regularMarketDayRange: {
    low: number;
    high: number;
  };
  regularMarketOpen: number;
  regularMarketVolume: number;
  marketCap: number;
  fullExchangeName: string;
}
