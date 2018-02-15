import {Component} from "@angular/core";
import {NotificationService} from "./notification.service";
import {AppConstants} from "./AppConstants";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'message-history',
  templateUrl: './history.component.html'
})

export class HistoryComponent {
  messageList = [];
  contactList = AppConstants.contacts;

  constructor(private _notificationService: NotificationService,private _flashMessageService:FlashMessagesService) {
    let that = this
    let promise = this._notificationService.messageList();
    promise.subscribe(function (object) {
        that.messageList = object.data;
        that.refactoringMessageList()
      },
      function (err) {
        that._flashMessageService.show(err.error.message,{ cssClass: 'alert-danger', timeout: 2000 })
      });
  }

  refactoringMessageList(){
    let that = this;
     that.messageList.forEach(function (messageData, index) {
       let num = that.messageList[index].Message.match(/\d/g)
       if (num) {
         num = num.join('');
         that.messageList[index].Message = num
       }
       that.contactList.forEach(function (contact) {
         if (messageData.To == contact.Mobile)
           that.messageList[index].Name = contact.FirstName + " " + contact.LastName
       })
     });
   }

}
