import { ChannelI } from "../interfaces/channel-i";
import { Message } from "./message";
import { User } from "./user";

export class Channel implements ChannelI{
  id!: number;
  description!: string;
  name!: string;
  createdAt: Date = new Date;
  updatedAt: Date = new Date;
  messages!: Message[];
  users!: User[];

  constructor(obj?: Partial<Channel>){
    if(obj){
      Object.assign(this, obj);
    }
  }
}

