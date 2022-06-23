import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  if (!process.env.PORT) {
    console.log(process.env.PORT);
    throw new Error('Port not set!');
  } else {
    await app.listen(process.env.PORT);
  }
}
bootstrap();
