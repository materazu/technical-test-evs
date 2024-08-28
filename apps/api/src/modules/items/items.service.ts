import { Inject, Injectable } from '@nestjs/common';
import { LocalStoreService } from '@evs/services';
import { LOCAL_STORE_SERVICE_TOKEN } from '@evs/tokens';
import { ItemDto } from '@evs/dtos';

/**
 * Service for managing items.
 */
@Injectable()
export class ItemsService {
  constructor(
    @Inject(LOCAL_STORE_SERVICE_TOKEN) private readonly localStoreService: LocalStoreService,
  ) {}

  /**
   * Get all items from the local store.
   *
   * @returns ItemDto array
   */
  getItems() {
    return this.localStoreService.store;
  }

  /**
   * Add a new item to the local store.
   *
   * @param item ItemDto to be added
   * @returns Updated ItemDto array
   */
  addItem(item: ItemDto) {
    return this.localStoreService.add(item);
  }
}
