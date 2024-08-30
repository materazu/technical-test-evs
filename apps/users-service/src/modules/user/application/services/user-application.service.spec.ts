import { Test, TestingModule } from '@nestjs/testing';
import { UserApplicationService } from './user-application.service';
import { getUserFixture, getUsersFixture } from '../../domain/entities/user.entity';
import { UserDomainService, UserDomainServiceMock } from '../../domain/services/user-domain.service';

describe('UserApplicationService', () => {
  let service: UserApplicationService;
  let domainService: UserDomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserApplicationService,
        {
          provide: UserDomainService,
          useClass: UserDomainServiceMock
        },
      ],
    }).compile();

    service = module.get<UserApplicationService>(UserApplicationService);
    domainService = module.get<UserDomainService>(UserDomainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(domainService).toBeDefined();
  });

  it('should get all users from the domainService', () => {
    const usersMock = getUsersFixture(3);
    const spyGetAllUsers = jest.spyOn(domainService, 'getAllUsers').mockReturnValue(usersMock);

    const users = service.getAllUsers();

    expect(users).toEqual(usersMock);
    expect(spyGetAllUsers).toHaveBeenCalled();

    spyGetAllUsers.mockReset();
  });

  it('should add a new user on domainService', () => {
    const userToAdd = getUserFixture();
    const usersMock = [...getUsersFixture(3), userToAdd];
    const spyCreateUser = jest.spyOn(domainService, 'createUser').mockReturnValue(usersMock);

    const users = service.createUser(userToAdd);

    expect(users).toEqual(usersMock);
    expect(spyCreateUser).toHaveBeenCalledWith(userToAdd);

    spyCreateUser.mockReset();
  });
});
