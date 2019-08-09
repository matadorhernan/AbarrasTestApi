import {
  Controller,
  Get,
  Res,
  UseGuards,
  Req,
  Param,
  Post,
  Body,
  Put,
} from '@nestjs/common';
import { SaleService } from '../../services/sale.service';
import { Response } from 'express';
import { TokenGuard } from '../../guards/token.guard';
import { Sale } from '../../interfaces/sale.interface';

@Controller('sale')
export class SaleController {
  constructor(private saleService: SaleService) {}

  @Get()
  @UseGuards(TokenGuard)
  getSales(@Res() res: Response, @Req() req: any) {
    const store: string | string[] = req.user.stores;

    this.saleService
      .findAlike(store)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Sales Found',
          document,
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Searching Sales',
          error,
        });
      });
  }

  @Get(':id')
  @UseGuards(TokenGuard)
  getSale(@Param('id') id: string, @Req() req: any, @Res() res: Response) {
    const store: string | string[] = req.user.stores;

    this.saleService
      .findById(store, id)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Sale Found',
          document,
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Searching Sale',
          error,
        });
      });
  }

  @Post()
  postSale(@Body() sale: Sale | Sale[], @Res() res: Response) {
    this.saleService
      .createOneOrMany(sale)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Sale Crated',
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Creating Sale',
          error,
        });
      });
  }

  @Put(':id')
  @UseGuards(TokenGuard)
  putSale(
    @Param('id') id: string,
    @Res() res: Response,
    @Req() req: any,
    @Body() sale: Sale,
  ) {
    const store: string | string[] = req.user.stores;

    this.saleService
      .updateCreateOne(store, id, sale)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Sale Updated',
          document,
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Updating Sale',
          error,
        });
      });
  }
}
