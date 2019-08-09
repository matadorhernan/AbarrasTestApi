import { Module } from '@nestjs/common';
import { ServicesModule } from '../services/services.module';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';
import { ProductController } from './product/product.controller';

@Module({
  imports: [
    ServicesModule
  ],
  controllers: [
    UserController,
    AuthController,
    ProductController
  ]
})

export class RoutesModule {}