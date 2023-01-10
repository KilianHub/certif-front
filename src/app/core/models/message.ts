import { MessageI } from "../interfaces/message-i";
import { Channel } from "./channel";
import { User } from "./user";

export class Message implements MessageI {
  id!: number;
  content!: string;
  createdAt: Date = new Date;
  updatedAt: Date = new Date;
  userId: number = 1;
  channelId: number = 8;

  constructor(obj?: Partial<Message>){
    if(obj){
      Object.assign(this, obj);
    }
  }
}
