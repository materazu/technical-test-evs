import { atom, RecoilState } from 'recoil';
import { ItemDto } from '@evs/dtos';

export const ItemsStore: RecoilState<ItemDto[]> = atom<ItemDto[]>({
  key: 'ItemsStore',
  default: [],
});
