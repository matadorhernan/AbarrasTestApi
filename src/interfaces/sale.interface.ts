import { Document } from 'mongoose';
import { Product } from './product.interface';
import { User } from './user.interface';

export interface Sale extends Document{
    products?: Array<Product>,
    seller: User,
    buyer: User,
    updater?: User,
    total?: Number,
    sellTime?: Number,
    created?: Date,
    updated?: Date,
  }