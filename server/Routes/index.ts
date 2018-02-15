import * as express from 'express';
import {NotificationRoutes} from "../Infrastructure/Notification/routes";

export class Routes{
  static init(app:express.Application ,router:any){
    NotificationRoutes.init(router);
    app.use('/', router);
  }
}
