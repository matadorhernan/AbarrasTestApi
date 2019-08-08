import { Schema } from 'mongoose';

export const SaleSchema = new Schema({
  products: [{
      type: Schema.Types.ObjectId,
      ref: 'Products',
  }],
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    default: null,
  },
  updater: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    default: null,
  },
  total: {
    type: Number,
    default: 0,
  },
  sellTime: {
    type: Number,
    default: 0,
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
