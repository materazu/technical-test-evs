import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ItemDto } from '@evs/dtos';

const okStatus = HttpStatus.OK;
const badRequestStatus = HttpStatus.BAD_REQUEST;

@Controller('items')
export class ItemsController {
  loggerScope = ItemsController.name;

  constructor(
    private readonly itemsService: ItemsService
  ) {}

  @ApiOperation({ summary: 'Get all items' })
  @ApiResponse({ status: okStatus, description: 'Returns items.', type: ItemDto, isArray: true })
  @ApiResponse({ status: badRequestStatus, description: 'Error in process' })
  @Get()
  getItems(@Res() res) {
    try {
      return res.status(okStatus).json(this.itemsService.getItems());
    } catch (error) {
      return res.status(badRequestStatus).json({ error: error.message });
    }
  }

  @Post()
  @ApiOperation({ summary: 'Adding an item' })
  @ApiResponse({ status: okStatus, description: 'Returns items with new Item added.', type: ItemDto, isArray: true })
  @ApiResponse({ status: badRequestStatus, description: 'Error in process or in validation' })
  addItem(@Body() item: ItemDto, @Res() res) {
    try {
      return res.status(okStatus).json(this.itemsService.addItem(item));
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }
}
