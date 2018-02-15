import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "./AppConstants";

@Injectable()
export class NotificationService {
  constructor(private _http: HttpClient) {
  }

  messageList(): any {
    return this._http.get(AppConstants.BASEURL + '/message/list')
  }

  sendMessage(obj):any {
    return this._http.post(AppConstants.BASEURL +'/text/message/send',obj);
  }
}
