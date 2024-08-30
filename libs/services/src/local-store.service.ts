/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Simple in-memory store for demonstration purposes.
 */
export class LocalStoreService {
  /**
   * Private store for holding items
   *
   * @private _store Items array
   */
  private _store: any[] = [];

  /**
   * Add a new item to the local store
   *
   * @param item ItemDto to be added to the store
   * @returns Items array after adding the new item
   */
  add(item: any): void {
    this._store.push(item);
  }

  /**
   * Get the current state of the local store
   *
   * @returns The local store
   */
  get store (): any[] {
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
