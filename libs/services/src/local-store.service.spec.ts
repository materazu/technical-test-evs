import { LocalStoreService } from './local-store.service';

describe('LocalStoreService', () => {
  const service = new LocalStoreService();

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should init empty', () => {
    expect(service.store).toEqual([]);
  });

  it('should add item', () => {
    const itemToAdd = { id: 1, name: 'John Doe' };
    service.add(itemToAdd);
    expect(service.store).toEqual([itemToAdd]);
  });
});
