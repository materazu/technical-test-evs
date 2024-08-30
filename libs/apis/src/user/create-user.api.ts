import { axiosCall } from '../axios-instance';
import { UserDto } from '@evs/dtos';

export const createUserApi = async (user: UserDto): Promise<UserDto[]> => {
  return axiosCall<UserDto[]>(
    'user',
    'post',
    'user',
    user,
  );
};
