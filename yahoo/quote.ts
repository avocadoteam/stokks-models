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
  symbolId: string | null;
}

export enum HistoryPeriodTarget {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year',
  FiveYears = 'fiveYears',
  TenYears = 'tenYears',
}
