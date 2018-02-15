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
const AppConstants_1 = require("./AppConstants");
const router_1 = require("@angular/router");
let ContactsComponent = class ContactsComponent {
    constructor(_router, _activeRoute) {
        this._router = _router;
        this._activeRoute = _activeRoute;
        this.contactList = AppConstants_1.AppConstants.contacts;
    }
    getInfo(id) {
        this._router.navigate(['../contactinfo/' + id], { relativeTo: this._activeRoute });
    }
};
ContactsComponent = __decorate([
    core_1.Component({
        selector: 'contact-list',
        templateUrl: './contacts.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], ContactsComponent);
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map