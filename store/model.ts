import { NotificationIntervalTarget, TriggerParam } from '../notifications';

export interface UserCreateModel {
  password: string;
}
export interface UserStoreModel {
  userId: number;
  symbol: string;
}

export interface UserDeleteStoreModel {
  userId: number;
  symbolId: string;
}

export interface UserGetNotificationModel {
  userId: number;
  symbolId: string;
}

export interface UserNotificationModel {
  userId: number;
  symbol: string;
  notifyInterval: NotificationIntervalTarget;
  triggerParam: TriggerParam;
  triggerValue: string;
}

export interface UserNotificationUpdateModel {
  notifyInterval: NotificationIntervalTarget;
  triggerParam: TriggerParam;
  triggerValue: string;
  delete: boolean;
}
