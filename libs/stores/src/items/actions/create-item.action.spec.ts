import { createItemAction } from './create-item.action';
import { createItemApi } from '@evs/apis';
import { getItemDtoFixture, ItemDto } from '@evs/dtos';

jest.mock('@evs/apis', () => ({
  createItemApi: jest.fn(),
}));

describe('createItemAction', () => {
  it('should call createItemApi and recoil setter with correct args', async () => {
    const mockSetItems = jest.fn();
    const item = getItemDtoFixture();
    const items: ItemDto[] = [getItemDtoFixture(), item];

    (createItemApi as jest.Mock).mockResolvedValue(items);

    await createItemAction(item, mockSetItems);

    expect(createItemApi).toHaveBeenCalledWith(item);
    expect(mockSetItems).toHaveBeenCalledWith(items);
  });
});
