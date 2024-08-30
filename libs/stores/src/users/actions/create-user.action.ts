import { SetterOrUpdater } from 'recoil';
import { createUserApi } from '@evs/apis';
import { UserDto } from '@evs/dtos';

export const createUserAction = async (
  user: UserDto,
  setUsers: SetterOrUpdater<UserDto[]>,
): Promise<void> => {
  const users: UserDto[] = await createUserApi(user);
  setUsers(users);
};
