import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AppConstants} from "./AppConstants";
import {NotificationService} from "./notification.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component ({
  selector:'new-message',
  templateUrl:'new.message.component.html'
})

  export class NewMessageComponent {
      id;
      contactList;
      otp;

  constructor(private _activeRoute: ActivatedRoute,private _notificationService:NotificationService,private _router: Router,private _flashMessageService:FlashMessagesService){
    let that = this;
    that.contactList = AppConstants.contacts;
    that.id = parseInt(this._activeRoute.snapshot.params['id']);
  }
  ngOnInit() {
     this.otp =  Math.floor(100000 + Math.random() * 900000)
  }

  send(){
    let that =this;
    let contacts = that.contactList.filter(function(contact){
      return contact.Id == that.id;
    })
     let obj = {
       Message: 'Hi. Your OTP is: '+this.otp,
       Mobile: contacts[0].Mobile
     };
    let promise = that._notificationService.sendMessage(obj);
    promise.subscribe(
      function (object) {
      that._flashMessageService.show("Message Sent",{ cssClass: 'alert-success', timeout: 2000 })
      that._router.navigate(['app/history']);

      },
      function (err) {
      console.log(err.error);
      that._flashMessageService.show(err.error.message,{ cssClass: 'alert-danger', timeout: 2000 });
      })


  }
}
