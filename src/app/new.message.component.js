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
const router_1 = require("@angular/router");
const AppConstants_1 = require("./AppConstants");
const notification_service_1 = require("./notification.service");
const angular2_flash_messages_1 = require("angular2-flash-messages");
let NewMessageComponent = class NewMessageComponent {
    constructor(_activeRoute, _notificationService, _router, _flashMessageService) {
        this._activeRoute = _activeRoute;
        this._notificationService = _notificationService;
        this._router = _router;
        this._flashMessageService = _flashMessageService;
        let that = this;
        that.contactList = AppConstants_1.AppConstants.contacts;
        that.id = parseInt(this._activeRoute.snapshot.params['id']);
    }
    ngOnInit() {
        this.otp = Math.floor(100000 + Math.random() * 900000);
    }
    send() {
        let that = this;
        let contacts = that.contactList.filter(function (contact) {
            return contact.Id == that.id;
        });
        let obj = {
            Message: 'Hi. Your OTP is: ' + this.otp,
            Mobile: contacts[0].Mobile
        };
        let promise = that._notificationService.sendMessage(obj);
        promise.subscribe(function (object) {
            that._flashMessageService.show("Message Sent", { cssClass: 'alert-success', timeout: 2000 });
            that._router.navigate(['app/history']);
        }, function (err) {
            console.log(err.error);
            that._flashMessageService.show(err.error.message, { cssClass: 'alert-danger', timeout: 2000 });
        });
    }
};
NewMessageComponent = __decorate([
    core_1.Component({
        selector: 'new-message',
        templateUrl: 'new.message.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, notification_service_1.NotificationService, router_1.Router, angular2_flash_messages_1.FlashMessagesService])
], NewMessageComponent);
exports.NewMessageComponent = NewMessageComponent;
//# sourceMappingURL=new.message.component.js.map