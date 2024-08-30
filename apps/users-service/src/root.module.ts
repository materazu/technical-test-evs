import { Module } from '@nestjs/common';
import { ItemsModule } from './modules/items/items.module';

@Module({
  imports: [ItemsModule],
})
export class RootModule {}
