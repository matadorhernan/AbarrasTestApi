import { Document } from 'mongoose';
import { Store } from '../interfaces/store.interface';

export interface User extends Document{
    name?: String,
    email: String,
    password?: String,
    stores?: Store[],
    created?: number,
    updated?: number,
    role?: String,
    banned: boolean
}