import { UserI } from "../interfaces/user-i";
import { Channel } from "./channel";
import { Message } from "./message";

export class User implements UserI {
  id!: number;
  email!: string;
  username!: string;
  password!: string;
  messages!: Message[];
  channels!: Channel[];

  constructor(obj?: Partial<User>){
    if(obj){
      Object.assign(this, obj);
    }
  }
}
