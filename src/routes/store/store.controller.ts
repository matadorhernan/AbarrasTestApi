import { Controller, Get, Res, Param, Post, Body, Put } from '@nestjs/common';
import { Response } from 'express';
import { StoreService } from '../../services/store.service';
import { Store } from '../../interfaces/store.interface';

@Controller('store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Get()
  getStores(@Res() res: Response) {
    this.storeService
      .findAll()
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Stores Found',
          document,
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Searching Stores',
          error,
        });
      });
  }

  @Get(':id')
  getStore(@Param('id') id: string, @Res() res: Response) {
    this.storeService
      .findById(id)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Store Found',
          document,
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Searching Store',
          error,
        });
      });
  }

  @Post()
  postStore(@Body() store: Store | Store[], @Res() res: Response) {
    this.storeService
      .createOneOrMany(store)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Store Created',
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Creating Store',
          error,
        });
      });
  }

  @Put(':id')
  putStore(
    @Param('id') id: string,
    @Body() store: Store,
    @Res() res: Response,
  ) {
    this.storeService
      .updateCreateOne(id, store)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Store Updated',
          document
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Updating Store',
          error,
        });
      });
  }
  
}
