import {MessageRequestBody, MessageViewListModel, MessageViewModel} from "../models/notification";
import * as twilio from 'twilio';
import {CustomError} from "../../Common/custom.error";
require('dotenv').config();

export interface INotificationService {
   sendMessage(messageBody:MessageRequestBody);
   messageList();
}

export class NotificationService implements INotificationService{
   sendMessage(messageBody:MessageRequestBody){
    let client = new twilio(process.env.accountSid,process.env.authToken)
  let promise =  client.messages.create({
       body: messageBody.Message,
       to: messageBody.Mobile,  // Text this number
       from: process.env.twilioNumber // From a valid Twilio number
     });
      promise = promise.then(function(message){
        console.log(message);
        return "success";
      },function (err) {
       throw new CustomError(err);
      });
      return promise;

   }
   messageList(){
     let list= [];
     let client = new twilio(process.env.accountSid,process.env.authToken)
     let promise =client.messages.list();
     promise = promise.then(function(data){
       data.forEach(function(messages){
         let obj:MessageViewModel = {
           Message:messages.body,
           AccoundSid:messages.accountSid,
           DateSent:messages.dateSent,
           Status:messages.status,
           Sid:messages.sid,
           To:messages.to

         }
         list.push(obj);
       })
       return list;
     }, function (err) {
       throw new Error(err);
     })
     return promise;
   }

}
