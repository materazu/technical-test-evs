import { getItemDtoFixture } from '@evs/dtos';
import { createItem } from './create-item';

describe('createItem', () => {
  it('should call post with body to create item', async () => {
    const item = getItemDtoFixture();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axiosInstance = require('../axios-instance');
    const spyOnAxiosCall = jest.spyOn(axiosInstance, 'axiosCall').mockResolvedValue([item]);

    const result = await createItem(item);

    expect(spyOnAxiosCall).toHaveBeenCalledWith(
      'items',
      'post',
      'items',
      item
    );
    expect(result).toEqual([item]);

    spyOnAxiosCall.mockClear();
  });

  it('should fail with error on post a new item', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axiosInstance = require('../axios-instance');
    const error = { message: 'Error creating item' };
    const spyOnAxiosCall = jest.spyOn(axiosInstance, 'axiosCall').mockRejectedValue(error);

    const item = getItemDtoFixture();

    try {
      await createItem(item);
    } catch (err) {
      expect(err).toEqual(error);
    }

    spyOnAxiosCall.mockClear();
  });
});
