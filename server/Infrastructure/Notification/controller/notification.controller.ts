import {INotificationService, NotificationService} from "../implementation/notification.service";
import {Util} from "../../Common/util.service";

export class NotificationController {

static sendNotification(req: any,res: any) {
  let notificationService: INotificationService = new NotificationService();
  let promise = notificationService.sendMessage(req.body);
  global['DefaultCallbackHandle'](promise,function(err,data){
    return Util.sendResponse(err,data,res)
  });
}

static getSentNotificationList(req: any,res: any){
  let notificationService: INotificationService = new NotificationService();
  let promise = notificationService.messageList();
  global['DefaultCallbackHandle'](promise,function(err,data){
    return Util.sendResponse(err,data,res)
  });

}
}
