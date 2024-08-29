import { findAllItemsAction } from './find-all-items.action';
import { findAllItemsApi } from '@evs/apis';
import { getItemDtoFixture, ItemDto } from '@evs/dtos';

jest.mock('@evs/apis', () => ({
  findAllItemsApi: jest.fn(),
}));

describe('findAllItemsAction', () => {
  it('should call findAllItemsApi and recoil setter with correct args', async () => {
    const mockSetItems = jest.fn();
    const items: ItemDto[] = [getItemDtoFixture()];

    (findAllItemsApi as jest.Mock).mockResolvedValue(items);

    await findAllItemsAction(mockSetItems);

    expect(findAllItemsApi).toHaveBeenCalled();
    expect(mockSetItems).toHaveBeenCalledWith(items);
  });
});
