import { Module } from '@nestjs/common';
import { ServicesModule } from '../services/services.module';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';
import { ProductController } from './product/product.controller';
import { StoreController } from './store/store.controller';
import { SaleController } from './sale/sale.controller';
import { ProductStatsController } from './stats/product.stats.controller';
import { StoreStatsController } from './stats/store.stats.controller';
import { UserStatsController } from './stats/user.stats.controller';

@Module({
  imports: [
    ServicesModule
  ],
  controllers: [
    AuthController,
    ProductController,
    SaleController,
    ProductStatsController,
    StoreStatsController,
    UserStatsController,
    StoreController,
    UserController,
  ]
})

export class RoutesModule {}