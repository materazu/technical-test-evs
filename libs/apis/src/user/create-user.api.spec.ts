import { getUserDtoFixture } from '@evs/dtos';
import { createUserApi } from './create-user.api';

describe('createUserApi', () => {
  it('should call post with body to create user', async () => {
    const user = getUserDtoFixture();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axiosInstance = require('../axios-instance');
    const spyOnAxiosCall = jest.spyOn(axiosInstance, 'axiosCall').mockResolvedValue([user]);

    const result = await createUserApi(user);

    expect(spyOnAxiosCall).toHaveBeenCalledWith(
      'user',
      'post',
      'user',
      user
    );
    expect(result).toEqual([user]);

    spyOnAxiosCall.mockClear();
  });

  it('should fail with error on post a new user', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axiosInstance = require('../axios-instance');
    const error = { message: 'Error creating user' };
    const spyOnAxiosCall = jest.spyOn(axiosInstance, 'axiosCall').mockRejectedValue(error);

    const user = getUserDtoFixture();

    try {
      await createUserApi(user);
    } catch (err) {
      expect(err).toEqual(error);
    }

    spyOnAxiosCall.mockClear();
  });
});
