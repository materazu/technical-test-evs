import { atom, RecoilState } from 'recoil';

export const USER_LIST = 'USER_LIST';
export const ADD_USER = 'ADD_USER';

export type AvailablePages = typeof USER_LIST | typeof ADD_USER;

export const PagesStore: RecoilState<AvailablePages> = atom<AvailablePages>({
  key: 'PagesStore',
  default: USER_LIST,
});
