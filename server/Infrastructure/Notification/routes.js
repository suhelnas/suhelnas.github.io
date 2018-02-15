"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notification_controller_1 = require("./controller/notification.controller");
class NotificationRoutes {
    static init(router) {
        router.post('/text/message/send', notification_controller_1.NotificationController.sendNotification);
        router.get('/message/list', notification_controller_1.NotificationController.getSentNotificationList);
    }
}
exports.NotificationRoutes = NotificationRoutes;
//# sourceMappingURL=routes.js.map