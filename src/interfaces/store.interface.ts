import { Document } from 'mongoose';
import { User } from '../interfaces/user.interface';

export interface Store extends Document {
  name?: String;
  address?: String;
  phone?: String;
}
