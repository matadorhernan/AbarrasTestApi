import { Module } from '@nestjs/common';
import { ServicesModule } from '../services/services.module';
import { AuthController } from './auth/auth.controller';

@Module({
  controllers: [
      AuthController
  ] ,
  imports: [
    ServicesModule
  ],
  exports: [
  ]
})
export class RoutesModule {}