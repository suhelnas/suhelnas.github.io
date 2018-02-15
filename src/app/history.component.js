"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const notification_service_1 = require("./notification.service");
const AppConstants_1 = require("./AppConstants");
const angular2_flash_messages_1 = require("angular2-flash-messages");
let HistoryComponent = class HistoryComponent {
    constructor(_notificationService, _flashMessageService) {
        this._notificationService = _notificationService;
        this._flashMessageService = _flashMessageService;
        this.messageList = [];
        this.contactList = AppConstants_1.AppConstants.contacts;
        let that = this;
        let promise = this._notificationService.messageList();
        promise.subscribe(function (object) {
            that.messageList = object.data;
            that.refactoringMessageList();
        }, function (err) {
            that._flashMessageService.show(err.error.message, { cssClass: 'alert-danger', timeout: 2000 });
        });
    }
    refactoringMessageList() {
        let that = this;
        that.messageList.forEach(function (messageData, index) {
            let num = that.messageList[index].Message.match(/\d/g);
            if (num) {
                num = num.join('');
                that.messageList[index].Message = num;
            }
            that.contactList.forEach(function (contact) {
                if (messageData.To == contact.Mobile)
                    that.messageList[index].Name = contact.FirstName + " " + contact.LastName;
            });
        });
    }
};
HistoryComponent = __decorate([
    core_1.Component({
        selector: 'message-history',
        templateUrl: './history.component.html'
    }),
    __metadata("design:paramtypes", [notification_service_1.NotificationService, angular2_flash_messages_1.FlashMessagesService])
], HistoryComponent);
exports.HistoryComponent = HistoryComponent;
//# sourceMappingURL=history.component.js.map