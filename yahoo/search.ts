export interface YahooQuote {
  exchange: string;
  shortname?: string;
  quoteType: string;
  symbol: string;
  index: string;
  score: number;
  typeDisp: string;
  longname?: string;
  isYahooFinance: boolean;
}
