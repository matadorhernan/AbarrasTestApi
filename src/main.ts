import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: {
    origin: 'http://0.0.0.0:4200'
  }});

  await app.listen(80);
}
bootstrap();
