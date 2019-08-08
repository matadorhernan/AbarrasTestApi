import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { ProductService } from './product.service';
import { SaleService } from './sale.service';
import { UserSchema } from '../models/user.schema';
import { ProductSchema } from '../models/product.schema';
import { SaleSchema } from '../models/sale.schema';

@Module({
  providers: [
    UserService, 
    ProductService,
    SaleService
  ] ,
  imports: [
    MongooseModule.forFeature([{name: 'Users', schema: UserSchema}]),
    MongooseModule.forFeature([{name: 'Products', schema: ProductSchema}]),
    MongooseModule.forFeature([{name: 'Sales', schema: SaleSchema}]),
  ],
  exports: [
    UserService, 
    ProductService,
    SaleService,
  ]
})
export class ServicesModule {}
