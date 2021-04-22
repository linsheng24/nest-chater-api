import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './adapters/redis-io-adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useWebSocketAdapter(new RedisIoAdapter(app));
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('The API document')
    .setVersion('1.0')
    .addSecurity('basic', {
      type: 'http',
      scheme: 'bearer',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
