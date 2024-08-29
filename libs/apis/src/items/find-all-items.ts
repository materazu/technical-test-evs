import { axiosCall } from '../axios-instance';
import { ItemDto } from '@evs/dtos';

export const findAllItems = async (): Promise<ItemDto[]> => {
  return axiosCall<ItemDto[]>(
    'items',
    'get',
  );
};
