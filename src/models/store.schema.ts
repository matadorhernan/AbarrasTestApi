import { Schema } from 'mongoose';

export const StoreSchema = new Schema({
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
