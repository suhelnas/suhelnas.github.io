import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {Topbar} from "./topbar";
import {ContactsComponent} from "./contacts.component";
import {HistoryComponent} from "./history.component";
import {NotificationService} from "./notification.service";
import {CoreComponent} from "./core.component";
import {ContactInfoComponent} from "./contact.info.component";
import {NewMessageComponent} from "./new.message.component";
import { FlashMessagesModule } from 'angular2-flash-messages/module';
var appRoutes: any = {
  path: 'app', component: CoreComponent, children: [
    {path: 'contacts', component: ContactsComponent, data: {title: 'Contacts'}},
    {path:'history', component:HistoryComponent, data: {title:'History'}},
    {path:'contactinfo/:id/newmessage/:id', component:NewMessageComponent, data: {title:'NewMessage'}},
    {path:'contactinfo/:id', component:ContactInfoComponent, data: {title:'Info'}},
    ]
};
@NgModule({
  declarations: [
    AppComponent,CoreComponent,Topbar,ContactsComponent,HistoryComponent,ContactInfoComponent,NewMessageComponent
  ],
  imports: [
    BrowserModule, NgbModule,HttpClientModule,FlashMessagesModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true})
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
