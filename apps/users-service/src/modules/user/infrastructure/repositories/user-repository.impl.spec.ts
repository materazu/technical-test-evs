import { Test, TestingModule } from '@nestjs/testing';
import { getUserFixture, getUsersFixture } from '../../domain/entities/user.entity';
import { UserRepositoryImpl } from './user-repository.impl';
import { LocalStoreService, LocalStoreServiceMock } from '@evs/services';
import { LOCAL_STORE_SERVICE } from '@evs/tokens';

describe('UserRepositoryImpl', () => {
  let service: UserRepositoryImpl;
  let localStoreService: LocalStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRepositoryImpl,
        {
          provide: LOCAL_STORE_SERVICE,
          useClass: LocalStoreServiceMock
        },
      ],
    }).compile();

    service = module.get<UserRepositoryImpl>(UserRepositoryImpl);
    localStoreService = await module.resolve<LocalStoreService>(LOCAL_STORE_SERVICE);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(localStoreService).toBeDefined();
  });

  it('should get all users from the localStoreService', () => {
    const usersMock = getUsersFixture(3);
    const spyGetStore = jest.spyOn(localStoreService, 'store', 'get').mockReturnValue(usersMock);

    const users = service.findAll();

    expect(users).toEqual(usersMock);
    expect(spyGetStore).toHaveBeenCalled();

    spyGetStore.mockReset();
  });

  it('should add a new user on localStoreService', () => {
    const userToAdd = getUserFixture();
    const usersMock = [...getUsersFixture(3), userToAdd];
    const spyAdd = jest.spyOn(localStoreService, 'add');
    const spyGetStore = jest.spyOn(localStoreService, 'store', 'get').mockReturnValue(usersMock);

    const users = service.save(userToAdd);

    expect(users).toEqual(usersMock);
    expect(spyAdd).toHaveBeenCalledWith(userToAdd);
    expect(spyGetStore).toHaveBeenCalled();

    spyAdd.mockReset();
  });
});
