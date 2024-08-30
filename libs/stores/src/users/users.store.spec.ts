import { UsersStore } from './users.store';
import { snapshot_UNSTABLE } from 'recoil';

describe('UsersStore', () => {
  it('should have correct default values and keys for UsersStore', () => {
    const initialSnapshot = snapshot_UNSTABLE();
    const UsersStoreDefaultValue = initialSnapshot.getLoadable(
      UsersStore,
    ).getValue();

    expect(UsersStore.key).toBe('UsersStore');
    expect(UsersStoreDefaultValue).toEqual([]);
  });
});
