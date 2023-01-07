import { Channel } from "../models/channel";
import { Message } from "../models/message";

export interface UserI {
  id: number;
  email: string;
  username: string;
  password: string;
  messages: Message[];
  channels: Channel[];
}
