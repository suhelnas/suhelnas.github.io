"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError {
    constructor(error, errCode) {
        this.error = error;
        this.message = error.message;
        this.errorCode = errCode;
    }
}
exports.CustomError = CustomError;
//# sourceMappingURL=custom.error.js.map