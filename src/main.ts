import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: {
    origin: true,
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200
  }});

  await app.listen(80);
}
bootstrap();
