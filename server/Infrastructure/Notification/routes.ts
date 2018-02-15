import * as express from 'express';
import {NotificationController} from "./controller/notification.controller";
export class NotificationRoutes {
  static init(router: express.Router) {
    router.post('/text/message/send',NotificationController.sendNotification)
    router.get('/message/list',NotificationController.getSentNotificationList)
  }
}
