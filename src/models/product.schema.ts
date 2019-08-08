import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  upc: {
    type: String,
    default: '00000000000000',
  },
  price: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: 'No description',
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});
