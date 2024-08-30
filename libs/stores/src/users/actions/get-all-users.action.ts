import { SetterOrUpdater } from 'recoil';
import { UserDto } from '@evs/dtos';
import { getAllUsersApi } from '@evs/apis';

export const getAllUsersAction = async (
  setItems: SetterOrUpdater<UserDto[]>,
): Promise<void> => {
  const users: UserDto[] = await getAllUsersApi();
  setItems(users);
};
