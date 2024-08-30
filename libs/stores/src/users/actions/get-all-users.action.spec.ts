import { getAllUsersAction } from './get-all-users.action';
import { getAllUsersApi } from '@evs/apis';
import { getUserDtoFixture, UserDto } from '@evs/dtos';

jest.mock('@evs/apis', () => ({
  getAllUsersApi: jest.fn(),
}));

describe('getAllUsersAction', () => {
  it('should call findAllUsersApi and recoil setter with correct args', async () => {
    const mockSetUsers = jest.fn();
    const users: UserDto[] = [getUserDtoFixture()];

    (getAllUsersApi as jest.Mock).mockResolvedValue(users);

    await getAllUsersAction(mockSetUsers);

    expect(getAllUsersApi).toHaveBeenCalled();
    expect(mockSetUsers).toHaveBeenCalledWith(users);
  });
});
