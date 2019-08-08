import { Document } from 'mongoose';

export interface Product extends Document{
    name?:String,
    upc?: String,
    price?: Number,
    description?: String,
    created?: Date,
    updated?: Date
}
