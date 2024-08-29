import { ItemsStore } from './items.store';
import { snapshot_UNSTABLE } from 'recoil';

describe('Recoil Atoms', () => {
  it('should have correct default values and keys for ItemsStore', () => {
    const initialSnapshot = snapshot_UNSTABLE();
    const ItemsStoreDefaultValue = initialSnapshot.getLoadable(
      ItemsStore,
    ).getValue();

    expect(ItemsStore.key).toBe('ItemsStore');
    expect(ItemsStoreDefaultValue).toEqual([]);
  });
});
