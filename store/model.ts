import { NotificationIntervalTarget, TriggerParam } from '../notifications';

export interface UserCreateModel {
  password: string;
}
export interface UserGoogleCreateModel {
  id: string;
  email: string;
}
export interface UserStoreModel {
  symbol: string;
}

export interface UserDeleteStoreModel {
  symbolId: string;
}

export interface UserGetNotificationModel {
  userId: number;
  symbolId: string;
}

export interface UserNotificationModel {
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
export interface UserExpoSettingsInstallModel {
  token: string;
  device: string;
}

export interface UserExpoSettingsPatchModel {
  enable: boolean;
  device: string;
}
