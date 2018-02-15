export class CustomError {
  error: Error;
  errorCode?:number;
  message:string;

  constructor(error: Error, errCode?:number){
    this.error = error;
    this.message = error.message;
    this.errorCode = errCode;
  }

}
