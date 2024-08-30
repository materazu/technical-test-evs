import { createUserAction } from './create-user.action';
import { createUserApi } from '@evs/apis';
import { getUserDtoFixture, UserDto } from '@evs/dtos';

jest.mock('@evs/apis', () => ({
  createUserApi: jest.fn(),
}));

describe('createUserAction', () => {
  it('should call createUserApi and recoil setter with correct args', async () => {
    const mockSetUsers = jest.fn();
    const user = getUserDtoFixture();
    const users: UserDto[] = [getUserDtoFixture(), user];

    (createUserApi as jest.Mock).mockResolvedValue(users);

    await createUserAction(user, mockSetUsers);

    expect(createUserApi).toHaveBeenCalledWith(user);
    expect(mockSetUsers).toHaveBeenCalledWith(users);
  });
});
