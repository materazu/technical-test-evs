import { getAllUsersApi } from './get-all-users.api';

describe('getAllUsersApi', () => {
  it('should call get to get all users', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axiosInstance = require('../axios-instance');
    const spyOnAxiosCall = jest.spyOn(axiosInstance, 'axiosCall').mockResolvedValue([]);

    const result = await getAllUsersApi();

    expect(spyOnAxiosCall).toHaveBeenCalledWith(
      'user',
      'get',
    );
    expect(result).toEqual([]);

    spyOnAxiosCall.mockClear();
  });

  it('should fail with error on get all users', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axiosInstance = require('../axios-instance');
    const error = { message: 'Error finding all users' };
    const spyOnAxiosCall = jest.spyOn(axiosInstance, 'axiosCall').mockRejectedValue(error);

    try {
      await getAllUsersApi();
    } catch (err) {
      expect(err).toEqual(error);
    }

    spyOnAxiosCall.mockClear();
  });
});
