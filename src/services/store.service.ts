import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Store } from '../interfaces/store.interface';

@Injectable()
export class StoreService {
    
    constructor(@InjectModel('Stores') private StoreModel:Model<Store>){}

    //paged search
    public async findAll():Promise<any>{
        return await this.StoreModel.find().exec();
    }

    //search
    public async findAlike(options:Store):Promise<any>{
        return await this.StoreModel.find(options).exec();
    }

    //specific search
    public async findById(id:string):Promise<any>{
        return await this.StoreModel.findById(id).exec();
    }

    //creation
    public async createOneOrMany(Stores: Store | Store[]):Promise<any>{
        return await this.StoreModel.create(Stores);
    }

    //modifying and deletion
    public async updateCreateOne(id:string, Store:Store):Promise<any>{
        return await this.StoreModel.findByIdAndUpdate(id, Store, {new:true, runValidators: true, upsert: true}).exec()
    }

    public async deleteOne(id:string){
        return await this.StoreModel.findByIdAndUpdate(id, {banned:true}, {new:true, runValidators: true}).exec()
    }

}
