export class  DbConfig {

  static getDbDefaultCallbackHandle() {
    return function (promise, cb) {
      if (cb == null) return promise;

      return promise.then(function (data) {
        cb(null, data);
      }).catch(function (err: any) {
        cb(err);
      });
    };
  }
}
