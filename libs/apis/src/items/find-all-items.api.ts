import { axiosCall } from '../axios-instance';
import { ItemDto } from '@evs/dtos';

export const findAllItemsApi = async (): Promise<ItemDto[]> => {
  return axiosCall<ItemDto[]>(
    'items',
    'get',
  );
};
