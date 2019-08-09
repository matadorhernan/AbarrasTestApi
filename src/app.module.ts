import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://miguelesvida:VjD1MNCIHNC7SYmj@cluster0-lpoyb.mongodb.net/abarras?retryWrites=true&w=majority',
      { useNewUrlParser: true }
    ),
    RoutesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
