import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { RootModule } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3001;
  await app.listen(port);

  Logger.log(
    `🚀 Api is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
