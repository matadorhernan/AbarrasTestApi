import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sale } from '../interfaces/sale.interface';

@Injectable()
export class SaleService {
    constructor(@InjectModel('Sales') private SaleModel: Model<Sale>){}

    //paged search
    public async findAll():Promise<any>{
        return await this.SaleModel.find()
        .populate('products')
        .populate('seller')
        .populate('buyer')
        .populate('updater')
        .exec();
    }

    //search
    public async findAlike(options:Sale):Promise<any>{
        return await this.SaleModel.find(options)
        .populate('products')
        .populate('seller')
        .populate('buyer')
        .populate('updater')
        .exec();
    }

    //specific search
    public async findById(id:string):Promise<any>{
        return await this.SaleModel.findById(id)
        .populate('products')
        .populate('seller')
        .populate('buyer')
        .populate('updater')
        .exec();
    }

    //creation
    public async createOneOrMany(sale: Sale | Array<Sale>):Promise<any>{
        return await this.SaleModel.create(sale);
    }

    //modifying and deletion
    public async updateCreateOne(id:string, sale:Sale):Promise<any>{
        return await this.SaleModel.findByIdAndUpdate(id, sale, {new:true, runValidators: true, upsert: true})
        .populate('products')
        .populate('seller')
        .populate('buyer')
        .populate('updater')
        .exec();
    }

    public async deleteOne(id:string){
        return await this.SaleModel.findByIdAndDelete(id).exec()
    }
}
