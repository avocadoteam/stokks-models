import { NotificationIntervalTarget, TriggerName, TriggerParam } from '../notifications';
import { YahooSearchResult } from '../yahoo';

export interface UserStoreItem extends YahooSearchResult {
  symbolId: string;
}

export interface UserNotificationInfo {
  id: number;
  triggerParam: TriggerParam;
  triggerName: TriggerName;
  triggerValue: string;
  notifyInterval: NotificationIntervalTarget;
  deleted: Date | null;
}
