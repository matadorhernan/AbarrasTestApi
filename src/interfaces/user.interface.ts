import { Document } from 'mongoose';

export interface User extends Document{
    name?: String,
    email: String,
    password?: String,
    created?: Date,
    updated?: Date,
    role?: String
}