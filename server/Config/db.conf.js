"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DbConfig {
    static getDbDefaultCallbackHandle() {
        return function (promise, cb) {
            if (cb == null)
                return promise;
            return promise.then(function (data) {
                cb(null, data);
            }).catch(function (err) {
                cb(err);
            });
        };
    }
}
exports.DbConfig = DbConfig;
//# sourceMappingURL=db.conf.js.map