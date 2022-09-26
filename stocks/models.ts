import { HistoryPeriodTarget } from '../yahoo/quote';

export interface SearchModel {
  query: string;
}
export interface SearchLangModel extends SearchModel {
  /**
   * en | ru
   */
  lang: string;
}
export interface TrendingModel {
  /**
   * max - 8,
   * min - 1
   */
  count: number;
}
export interface SymbolInfoModel {
  symbol: string;
}
export interface SymbolHystoryModel extends SymbolInfoModel {
  target: HistoryPeriodTarget;
}
export interface TweetsModel {
  query: string;
}
export interface NewsItemsModel {
  query: string;
}
