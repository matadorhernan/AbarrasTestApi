import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../interfaces/product.interface';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Products') private ProductModel:Model<Product> ){}

    //paged search
    public async findAll():Promise<any>{
        return await this.ProductModel.find().exec();
    }

    //search
    public async findAlike(options:Product):Promise<any>{
        return await this.ProductModel.find(options).exec();
    }

    //specific search
    public async findById(id:string):Promise<any>{
        return await this.ProductModel.findById(id).exec();
    }

    //creation
    public async createOneOrMany(products: Product | Array<Product>):Promise<any>{
        return await this.ProductModel.create(products);
    }

    //modifying and deletion
    public async updateCreateOne(id:string, product:Product):Promise<any>{
        return await this.ProductModel.findByIdAndUpdate(id, product, {new:true, runValidators: true, upsert: true}).exec()
    }

    public async deleteOne(id:string){
        return await this.ProductModel.findByIdAndDelete(id).exec()
    }
}
