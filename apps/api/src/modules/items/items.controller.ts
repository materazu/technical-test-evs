import { Controller, Get, Post } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(
    private readonly itemsService: ItemsService
  ) {}

  @Get()
  getItems() {
    return this.itemsService.getItems();
  }

  @Post()
  addItem(item) {
    return this.itemsService.addItem(item);
  }
}
