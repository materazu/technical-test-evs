import { axiosCall } from '../axios-instance';
import { UserDto } from '@evs/dtos';

export const getAllUsersApi = async (): Promise<UserDto[]> => {
  return axiosCall<UserDto[]>(
    'user',
    'get',
  );
};
