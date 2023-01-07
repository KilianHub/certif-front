import { Channel } from "../models/channel";
import { User } from "../models/user";

export interface MessageI {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  channel: Channel;
}
