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
  target: NotificationIntervalTarget;
  priceMatch: number;
}

export interface UserNotificationUpdateModel {
  target: NotificationIntervalTarget;
  priceMatch: number;
  delete: boolean;
}
