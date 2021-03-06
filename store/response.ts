import { NotificationIntervalTarget, TriggerName, TriggerParam } from '../notifications';
import { HistoricalData, YahooSearchResult } from '../yahoo';

export interface UserStoreItem extends YahooSearchResult {
  symbolId: string;
  history: HistoricalData;
}

export interface UserNotificationInfo {
  id: number;
  triggerParam: TriggerParam;
  triggerName: TriggerName;
  triggerValue: string;
  notifyInterval: NotificationIntervalTarget;
  deleted: Date | null;
}
