"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const http_1 = require("@angular/common/http");
const app_component_1 = require("./app.component");
const router_1 = require("@angular/router");
const topbar_1 = require("./topbar");
const contacts_component_1 = require("./contacts.component");
const history_component_1 = require("./history.component");
const notification_service_1 = require("./notification.service");
const core_component_1 = require("./core.component");
const contact_info_component_1 = require("./contact.info.component");
const new_message_component_1 = require("./new.message.component");
const module_1 = require("angular2-flash-messages/module");
var appRoutes = {
    path: 'app', component: core_component_1.CoreComponent, children: [
        { path: 'contacts', component: contacts_component_1.ContactsComponent, data: { title: 'Contacts' } },
        { path: 'history', component: history_component_1.HistoryComponent, data: { title: 'History' } },
        { path: 'contactinfo/:id/newmessage/:id', component: new_message_component_1.NewMessageComponent, data: { title: 'NewMessage' } },
        { path: 'contactinfo/:id', component: contact_info_component_1.ContactInfoComponent, data: { title: 'Info' } },
    ]
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent, core_component_1.CoreComponent, topbar_1.Topbar, contacts_component_1.ContactsComponent, history_component_1.HistoryComponent, contact_info_component_1.ContactInfoComponent, new_message_component_1.NewMessageComponent
        ],
        imports: [
            platform_browser_1.BrowserModule, ng_bootstrap_1.NgbModule, http_1.HttpClientModule, module_1.FlashMessagesModule.forRoot(),
            router_1.RouterModule.forRoot(appRoutes, { useHash: true })
        ],
        providers: [notification_service_1.NotificationService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map