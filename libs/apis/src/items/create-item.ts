import { axiosCall } from '../axios-instance';
import { ItemDto } from '@evs/dtos';

export const createItem = async (item: ItemDto): Promise<ItemDto[]> => {
  return axiosCall<ItemDto[]>(
    'items',
    'post',
    'items',
    item,
  );
};
