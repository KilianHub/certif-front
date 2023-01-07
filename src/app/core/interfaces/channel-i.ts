import { Message } from "../models/message";
import { User } from "../models/user";

export interface ChannelI {
  id: number;
  description: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  messages: Message[];
  users: User[];
}
