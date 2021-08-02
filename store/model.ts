import { NotificationIntervalTarget } from '../notifications';

export interface UserStoreModel {
  userId: number;
  symbol: string;
}

export interface UserDeleteStoreModel {
  userId: number;
  symbolId: string;
}

export interface UserNotificationModel {
  userId: number;
  symbol: string;
  notifyInterval: NotificationIntervalTarget;
  priceMatch: number;
}

export interface UserNotificationUpdateModel {
  notifyInterval: NotificationIntervalTarget;
  priceMatch: number;
  delete: boolean;
}
