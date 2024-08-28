import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService, ItemsServiceMock } from './items.service';
import { getItemDtoFixture, getItemsDtoFixture } from '@evs/dtos';

const resMock = {
  status: () => {
    return {
      json: (object: unknown) => {
        return object;
      },
      send: (object: unknown) => {
        return object;
      },
    };
  },
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
} as any;

describe('ItemsController', () => {
  let controller: ItemsController;
  let service: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [
        {
          provide: ItemsService,
          useClass: ItemsServiceMock
        },
      ],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
    service = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should get all items', () => {
    const itemsMock = getItemsDtoFixture(3);
    const spyGetItem = jest.spyOn(service, 'getItems').mockReturnValue(itemsMock);
    const spyStatus = jest.spyOn(resMock, 'status');

    const items = controller.getItems(resMock);

    expect(spyGetItem).toHaveBeenCalled();
    expect(spyStatus).toHaveBeenCalledWith(200);
    expect(items).toEqual(itemsMock);

    spyGetItem.mockClear();
    spyStatus.mockClear();
  });

  it('should return error if service fail for getItems', () => {
    const spyGetItem = jest.spyOn(service, 'getItems').mockImplementation(() => {
      throw new Error('Service error');
    });
    const spyStatus = jest.spyOn(resMock, 'status');

    const response = controller.getItems(resMock);

    expect(spyGetItem).toHaveBeenCalled();
    expect(spyStatus).toHaveBeenCalledWith(400);
    expect(response).toEqual({error: 'Service error'});
  });

  it('should add an item', () => {
    const itemToAdd = getItemDtoFixture();
    const itemsMock = [...getItemsDtoFixture(3), itemToAdd];
    const spyAddItem = jest.spyOn(service, 'addItem').mockReturnValue(itemsMock);
    const spyStatus = jest.spyOn(resMock, 'status');

    const items = controller.addItem(itemToAdd, resMock);

    expect(spyAddItem).toHaveBeenCalledWith(itemToAdd);
    expect(spyStatus).toHaveBeenCalledWith(200);
    expect(items).toEqual(itemsMock);

    spyAddItem.mockClear();
    spyStatus.mockClear();
  });

  it('should return error if service fail for addItem', () => {
    const itemToAdd = getItemDtoFixture();
    const spyAddItem = jest.spyOn(service, 'addItem').mockImplementation(() => {
      throw new Error('Service error');
    });
    const spyStatus = jest.spyOn(resMock, 'status');

    const response = controller.addItem(itemToAdd, resMock);

    expect(spyAddItem).toHaveBeenCalledWith(itemToAdd);
    expect(spyStatus).toHaveBeenCalledWith(400);
    expect(response).toEqual({error: 'Service error'});
  });
});
