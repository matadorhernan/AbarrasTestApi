import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sale } from '../interfaces/sale.interface';
import { Store } from '../interfaces/store.interface';

@Injectable()
export class SaleService {
  constructor(@InjectModel('Sales') private SaleModel: Model<Sale>) {}

  //paged search
  public async findAll(store: string | string[]): Promise<any> {
    return await this.SaleModel.find({ stores: { $in: store } })
      .populate('store')
      .populate('products')
      .populate('seller')
      .populate('buyer')
      .populate('updater')
      .exec();
  }

  //search
  public async findAlike( store: string | string[], options?: Sale): Promise<any> {

    delete options.store;

    return await this.SaleModel.find(Object.assign({ stores: { $in: store } }, options))
      .populate('store')
      .populate('products')
      .populate('seller')
      .populate('buyer')
      .populate('updater')
      .exec();
  }

  //specific search
  public async findById(store: string | string[], id: string): Promise<any> {
    return await this.SaleModel.find({_id:id, store:{$in:store}})
      .populate('store')
      .populate('products')
      .populate('seller')
      .populate('buyer')
      .populate('updater')
      .exec();
  }

  //creation
  public async createOneOrMany(sale: Sale | Array<Sale>): Promise<any> {
    return await this.SaleModel.create(sale);
  }

  //modifying and deletion
  public async updateCreateOne(store: string | string[],id: string, sale: Sale): Promise<any> {
    return await this.SaleModel.update({_id:id, store:{$in:store}}, sale, {
      new: true,
      runValidators: true,
      upsert: true,
    })
      .populate('store')
      .populate('products')
      .populate('seller')
      .populate('buyer')
      .populate('updater')
      .exec();
  }

  public async deleteOne(store: string | string[], id: string) {
    return await this.SaleModel.remove({_id:id, store:{$in:store}}).exec();
  }
}
