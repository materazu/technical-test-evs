import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { LOCAL_STORE_SERVICE_TOKEN } from '@evs/tokens';
import { LocalStoreService } from '@evs/services';

@Module({
  controllers: [
    ItemsController
  ],
  providers: [
    ItemsService,
    { provide: LOCAL_STORE_SERVICE_TOKEN, useClass: LocalStoreService }
  ]
})
export class ItemsModule {}
