import * as express from 'express';
import {RoutesConf} from "./Config/routes.conf";
import {Routes} from "./Routes/index";
import * as http from "http";
import {DbConfig} from "./Config/db.conf";
let app = express();


global['DefaultCallbackHandle'] = DbConfig.getDbDefaultCallbackHandle();
RoutesConf.init(app);
Routes.init(app,express.Router());
http.createServer(app).listen(8080 ,'localhost',() =>{
  console.log('Starting server ...');
});
