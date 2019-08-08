import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UserService {
    
    constructor(@InjectModel('Users') private UserModel:Model<User>){}

    //authentication
    public async findAuthPassword(options:User):Promise<any>{
        return await this.UserModel.findOne(options).select('password').exec();
    }

    //paged search
    public async findAll():Promise<any>{
        return await this.UserModel.find().exec();
    }

    //search
    public async findAlike(options:User):Promise<any>{
        return await this.UserModel.find(options).exec();
    }

    //specific search
    public async findById(id:string):Promise<any>{
        return await this.UserModel.findById(id).exec();
    }

    //creation
    public async createOneOrMany(users: User | Array<User>):Promise<any>{
        return await this.UserModel.create(users);
    }

    //modifying and deletion
    public async updateCreateOne(id:string, user:User):Promise<any>{
        return await this.UserModel.findByIdAndUpdate(id, user, {new:true, runValidators: true, upsert: true}).exec()
    }

    public async deleteOne(id:string){
        return await this.UserModel.findByIdAndUpdate(id, {banned:true}, {new:true, runValidators: true}).exec()
    }

}
