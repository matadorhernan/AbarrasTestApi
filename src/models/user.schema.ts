import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    name: {
        type: String,
        default: 'New User'
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: 'BUYER',
        enum: ['ADMIN','MANAGER', 'STOCKER', 'CASHIER', 'BUYER']
    },
    banned: {
        type: Boolean,
        default: false
    }
})