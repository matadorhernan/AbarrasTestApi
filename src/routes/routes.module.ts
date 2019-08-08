import { Module } from '@nestjs/common';
import { ServicesModule } from '../services/services.module';
import { AuthController } from './auth/auth.controller';
import { LocalGuard } from '../guards/local.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [
    AuthController
  ] ,
  imports: [
    ServicesModule
  ]
})
export class RoutesModule {}