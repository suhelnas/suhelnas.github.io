"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_conf_1 = require("./Config/routes.conf");
const index_1 = require("./Routes/index");
const http = require("http");
const db_conf_1 = require("./Config/db.conf");
let app = express();
global['DefaultCallbackHandle'] = db_conf_1.DbConfig.getDbDefaultCallbackHandle();
routes_conf_1.RoutesConf.init(app);
index_1.Routes.init(app, express.Router());
http.createServer(app).listen(8080, 'localhost', () => {
    console.log('Starting server ...');
});
//# sourceMappingURL=server.js.map