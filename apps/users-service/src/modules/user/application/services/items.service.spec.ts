import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { LOCAL_STORE_SERVICE_TOKEN } from '@evs/tokens';
import { LocalStoreService, LocalStoreServiceMock } from '@evs/services';
import { getItemDtoFixture, getItemsDtoFixture } from '@evs/dtos';

describe('ItemsService', () => {
  let service: ItemsService;
  let localStoreService: LocalStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: LOCAL_STORE_SERVICE_TOKEN,
          useClass: LocalStoreServiceMock
        },
      ],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
    localStoreService = await module.resolve(LOCAL_STORE_SERVICE_TOKEN);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(localStoreService).toBeDefined();
  });

  it('should get all items from the local store', () => {
    const itemsMock = getItemsDtoFixture(3);
    const spyGetItems = jest.spyOn(localStoreService, 'store', 'get').mockReturnValue(itemsMock);

    const items = service.getItems();

    expect(items).toEqual(itemsMock);
    expect(spyGetItems).toHaveBeenCalled();

    spyGetItems.mockReset();
  });

  it('should add a new item to the local store', () => {
    const itemToAdd = getItemDtoFixture();
    const itemsMock = [...getItemsDtoFixture(3), itemToAdd];
    const spyAdd = jest.spyOn(localStoreService, 'add').mockReturnValue(itemsMock);

    const items = service.addItem(itemToAdd);

    expect(items).toEqual(itemsMock);
    expect(spyAdd).toHaveBeenCalledWith(itemToAdd);

    spyAdd.mockReset();
  });
});
