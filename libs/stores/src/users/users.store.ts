import { atom, RecoilState } from 'recoil';
import { UserDto } from '@evs/dtos';

export const UsersStore: RecoilState<UserDto[]> = atom<UserDto[]>({
  key: 'UsersStore',
  default: [],
});
