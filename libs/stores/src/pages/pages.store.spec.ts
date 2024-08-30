import { ITEM_LIST, PagesStore } from './pages.store';
import { snapshot_UNSTABLE } from 'recoil';

describe('PagesStore', () => {
  it('should have correct default values and keys for ItemsStore', () => {
    const initialSnapshot = snapshot_UNSTABLE();
    const ItemsStoreDefaultValue = initialSnapshot.getLoadable(
      PagesStore,
    ).getValue();

    expect(PagesStore.key).toBe('PagesStore');
    expect(ItemsStoreDefaultValue).toEqual(ITEM_LIST);
  });
});
