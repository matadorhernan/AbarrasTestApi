import {
  Controller,
  Get,
  Param,
  Res,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import * as _ from 'lodash';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts(@Res() res: Response) {
    this.productService
      .findAll()
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Products Found',
          document,
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Searching Products',
          error,
        });
      });
  }

  @Get(':id')
  getProductsById(@Param('id') id: string, @Res() res: Response) {
    this.productService
      .findById(id)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Product Found',
          document,
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Searching Product',
          error,
        });
      });
  }

  @Post()
  postProduct(@Body() product: Product | Product[], @Res() res: Response) {
    product = _.isArray(product)
      ? _.map(
          product,
          p => _.pick(p, ['name', 'upc', 'price', 'description']) as Product,
        )
      : (_.pick(product, ['name', 'upc', 'price', 'description']) as Product);

    this.productService
      .createOneOrMany(product)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Product Created',
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Creating Product',
          error,
        });
      });
  }

  @Put(':id')
  putProduct(
    @Param('id') id: string,
    @Res() res: Response,
    @Body() product: Product,
  ) {
    this.productService
      .updateCreateOne(id, product)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Product Updated',
          document,
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Updating Product',
          error,
        });
      });
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string, @Res() res: Response) {
    this.productService
      .deleteOne(id)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Product Deleted',
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Deleting Product',
          error,
        });
      });
  }
}
