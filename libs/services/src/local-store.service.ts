import { ItemDto } from '@evs/dtos';

/**
 * Simple in-memory store for demonstration purposes.
 */
export class LocalStoreService {
  /**
   * Private store for holding items
   *
   * @private _store Items array
   */
  private _store: ItemDto[] = [];

  /**
   * Add a new item to the local store
   *
   * @param item ItemDto to be added to the store
   * @returns Items array after adding the new item
   */
  add(item: ItemDto): ItemDto[] {
    this._store.push(item);

    return this.store;
  }

  /**
   * Get the current state of the local store
   *
   * @returns The local store
   */
  get store (): ItemDto[] {
    return this._store;
  }
}

/* istanbul ignore next */
export class LocalStoreServiceMock {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  private _store: any;
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  add() {}
  get store() { return this._store }
}
