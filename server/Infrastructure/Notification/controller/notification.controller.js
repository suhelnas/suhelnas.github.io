"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notification_service_1 = require("../implementation/notification.service");
const util_service_1 = require("../../Common/util.service");
class NotificationController {
    static sendNotification(req, res) {
        let notificationService = new notification_service_1.NotificationService();
        let promise = notificationService.sendMessage(req.body);
        global['DefaultCallbackHandle'](promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    }
    static getSentNotificationList(req, res) {
        let notificationService = new notification_service_1.NotificationService();
        let promise = notificationService.messageList();
        global['DefaultCallbackHandle'](promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    }
}
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.controller.js.map