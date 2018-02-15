export interface MessageRequestBody {
  Mobile:number,
  Message:string
}
export interface MessageViewListModel {
  Collection:MessageViewModel[]
}
export interface MessageViewModel {
  Message:string,
  AccoundSid:string,
  DateSent:Date,
  Status:string,
  Sid:string,
  To:string
}
