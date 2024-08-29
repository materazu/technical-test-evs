import { findAllItems } from './find-all-items';

describe('findAllItems', () => {
  it('should call get to get all items', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axiosInstance = require('../axios-instance');
    const spyOnAxiosCall = jest.spyOn(axiosInstance, 'axiosCall').mockResolvedValue([]);

    const result = await findAllItems();

    expect(spyOnAxiosCall).toHaveBeenCalledWith(
      'items',
      'get',
    );
    expect(result).toEqual([]);

    spyOnAxiosCall.mockClear();
  });

  it('should fail with error on get all items', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axiosInstance = require('../axios-instance');
    const error = { message: 'Error finding all items' };
    const spyOnAxiosCall = jest.spyOn(axiosInstance, 'axiosCall').mockRejectedValue(error);

    try {
      await findAllItems();
    } catch (err) {
      expect(err).toEqual(error);
    }

    spyOnAxiosCall.mockClear();
  });
});
