import { SetterOrUpdater } from 'recoil';
import { createItemApi } from '@evs/apis';
import { ItemDto } from '@evs/dtos';

export const createItemAction = async (
  item: ItemDto,
  setItems: SetterOrUpdater<ItemDto[]>,
): Promise<void> => {
  const items: ItemDto[] = await createItemApi(item);
  setItems(items);
};
