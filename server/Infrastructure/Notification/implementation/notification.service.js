"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twilio = require("twilio");
const custom_error_1 = require("../../Common/custom.error");
require('dotenv').config();
class NotificationService {
    sendMessage(messageBody) {
        let client = new twilio(process.env.accountSid, process.env.authToken);
        let promise = client.messages.create({
            body: messageBody.Message,
            to: messageBody.Mobile,
            from: process.env.twilioNumber // From a valid Twilio number
        });
        promise = promise.then(function (message) {
            console.log(message);
            return "success";
        }, function (err) {
            throw new custom_error_1.CustomError(err);
        });
        return promise;
    }
    messageList() {
        let list = [];
        let client = new twilio(process.env.accountSid, process.env.authToken);
        let promise = client.messages.list();
        promise = promise.then(function (data) {
            data.forEach(function (messages) {
                let obj = {
                    Message: messages.body,
                    AccoundSid: messages.accountSid,
                    DateSent: messages.dateSent,
                    Status: messages.status,
                    Sid: messages.sid,
                    To: messages.to
                };
                list.push(obj);
            });
            return list;
        }, function (err) {
            throw new Error(err);
        });
        return promise;
    }
}
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map