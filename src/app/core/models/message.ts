import { MessageI } from "../interfaces/message-i";
import { Channel } from "./channel";
import { User } from "./user";

export class Message implements MessageI {
  id!: number;
  content!: string;
  createdAt = new Date;
  updatedAt = new Date;
  user!: User;
  channel!: Channel;

  constructor(obj?: Partial<Message>){
    if(obj){
      Object.assign(this, obj);
    }
  }
}
