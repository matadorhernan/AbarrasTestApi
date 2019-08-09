import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: {
    type: String,
    default: 'New Store',
  },
  address: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
});
