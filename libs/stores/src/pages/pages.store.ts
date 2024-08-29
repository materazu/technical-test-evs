import { atom, RecoilState } from 'recoil';

export const ITEM_LIST = 'ITEM_LIST';
export const ADD_ITEM = 'ADD_ITEM';

export type AvailablePages = typeof ITEM_LIST | typeof ADD_ITEM;

export const PagesStore: RecoilState<AvailablePages> = atom<AvailablePages>({
  key: 'PagesStore',
  default: ITEM_LIST,
});
