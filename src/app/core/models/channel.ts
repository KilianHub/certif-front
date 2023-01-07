import { ChannelI } from "../interfaces/channel-i";
import { Message } from "./message";
import { User } from "./user";

export class Channel implements ChannelI{
  id!: number;
  description!: string;
  name!: string;
  createdAt = new Date;
  updatedAt = new Date;
  messages!: Message[];
  users!: User[];

  constructor(obj?: Partial<Channel>){
    if(obj){
      Object.assign(this, obj);
    }
  }
}

