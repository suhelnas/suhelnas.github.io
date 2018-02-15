"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("../Infrastructure/Notification/routes");
class Routes {
    static init(app, router) {
        routes_1.NotificationRoutes.init(router);
        app.use('/', router);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map