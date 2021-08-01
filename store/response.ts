import { YahooSearchResult } from '../yahoo';

export interface UserStoreItem extends YahooSearchResult {
  symbolId: string;
}

export interface UserNotificationInfo {
  id: number;
  priceMatch: number;
  notifyInterval: string;
  deleted: Date | null;
}
