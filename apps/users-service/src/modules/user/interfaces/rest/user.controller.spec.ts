import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { getUserDtoFixture, UserDto } from '@evs/dtos';
import { UserApplicationService, UserApplicationServiceMock } from '../../application/services/user-application.service';
import { getUsersFixture, User } from '../../domain/entities/user.entity';
import { plainToClass, plainToInstance } from 'class-transformer';

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

describe('UserController', () => {
  let controller: UserController;
  let service: UserApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserApplicationService,
          useClass: UserApplicationServiceMock
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserApplicationService>(UserApplicationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should get all users', () => {
    const usersMock = getUsersFixture(3);
    const result = plainToInstance(UserDto, usersMock);
    const spyGetItem = jest.spyOn(service, 'getAllUsers').mockReturnValue(usersMock);
    const spyStatus = jest.spyOn(resMock, 'status');

    const users = controller.getAllUsers(resMock);

    expect(spyGetItem).toHaveBeenCalled();
    expect(spyStatus).toHaveBeenCalledWith(200);
    expect(users).toEqual(result);

    spyGetItem.mockClear();
    spyStatus.mockClear();
  });

  it('should return error if service fail for getUser', () => {
    const spyGetItem = jest.spyOn(service, 'getAllUsers').mockImplementation(() => {
      throw new Error('Service error');
    });
    const spyStatus = jest.spyOn(resMock, 'status');

    const response = controller.getAllUsers(resMock);

    expect(spyGetItem).toHaveBeenCalled();
    expect(spyStatus).toHaveBeenCalledWith(400);
    expect(response).toEqual({error: 'Service error'});
  });

  it('should add an user', () => {
    const userToAdd = getUserDtoFixture();
    const userToAddInstance = plainToClass(User, userToAdd);
    const usersMock = [...getUsersFixture(3), userToAdd];
    const response = plainToInstance(UserDto, usersMock);
    const spyAddItem = jest.spyOn(service, 'createUser').mockReturnValue(usersMock);
    const spyStatus = jest.spyOn(resMock, 'status');

    const users = controller.createUser(userToAdd, resMock);

    expect(spyAddItem).toHaveBeenCalledWith(userToAddInstance);
    expect(spyStatus).toHaveBeenCalledWith(200);
    expect(users).toEqual(response);

    spyAddItem.mockClear();
    spyStatus.mockClear();
  });

  it('should return error if service fail for addItem', () => {
    const userToAdd = getUserDtoFixture();
    const spyAddItem = jest.spyOn(service, 'createUser').mockImplementation(() => {
      throw new Error('Service error');
    });
    const spyStatus = jest.spyOn(resMock, 'status');

    const response = controller.createUser(userToAdd, resMock);

    expect(spyAddItem).toHaveBeenCalledWith(userToAdd);
    expect(spyStatus).toHaveBeenCalledWith(400);
    expect(response).toEqual({error: 'Service error'});
  });
});
