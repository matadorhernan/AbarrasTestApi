import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { ProductService } from './product.service';
import { SaleService } from './sale.service';
import { UserSchema } from '../models/user.schema';
import { ProductSchema } from '../models/product.schema';
import { SaleSchema } from '../models/sale.schema';
import { StoreService } from './store.service';
import { StoreSchema } from '../models/store.schema';

@Module({
  providers: [
    UserService, 
    ProductService,
    SaleService,
    StoreService
  ] ,
  imports: [
    MongooseModule.forFeature([{name: 'Users', schema: UserSchema}]),
    MongooseModule.forFeature([{name: 'Products', schema: ProductSchema}]),
    MongooseModule.forFeature([{name: 'Sales', schema: SaleSchema}]),
    MongooseModule.forFeature([{name: 'Stores', schema: StoreSchema}]),
  ],
  exports: [
    UserService, 
    ProductService,
    SaleService,
    StoreService
  ]
})
export class ServicesModule {}
