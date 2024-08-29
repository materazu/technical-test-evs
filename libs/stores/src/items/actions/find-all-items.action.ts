import { SetterOrUpdater } from 'recoil';
import { findAllItemsApi } from '@evs/apis';
import { ItemDto } from '@evs/dtos';

export const findAllItemsAction = async (
  setItems: SetterOrUpdater<ItemDto[]>,
): Promise<void> => {
  const items: ItemDto[] = await findAllItemsApi();
  setItems(items);
};
