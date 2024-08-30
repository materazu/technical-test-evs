import { Test, TestingModule } from '@nestjs/testing';
import { getUserFixture, getUsersFixture } from '../../domain/entities/user.entity';
import { UserDomainService } from '../../domain/services/user-domain.service';
import { UserRepository } from '../ports/user-repository.interface';
import { UserRepositoryImplMock } from '../../infrastructure/repositories/user-repository.impl';
import { USER_REPOSITORY } from '@evs/tokens';

describe('UserDomainService', () => {
  let service: UserDomainService;
  let repository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserDomainService,
        {
          provide: USER_REPOSITORY,
          useClass: UserRepositoryImplMock
        },
      ],
    }).compile();

    service = module.get<UserDomainService>(UserDomainService);
    repository = await module.resolve<UserRepository>(USER_REPOSITORY);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should get all users from the repository', () => {
    const usersMock = getUsersFixture(3);
    const spyGetAllUsers = jest.spyOn(repository, 'findAll').mockReturnValue(usersMock);

    const users = service.getAllUsers();

    expect(users).toEqual(usersMock);
    expect(spyGetAllUsers).toHaveBeenCalled();

    spyGetAllUsers.mockReset();
  });

  it('should add a new user on the repository', () => {
    const userToAdd = getUserFixture();
    const usersMock = [...getUsersFixture(3), userToAdd];
    const spyCreateUser = jest.spyOn(repository, 'save').mockReturnValue(usersMock);

    const users = service.createUser(userToAdd);

    expect(users).toEqual(usersMock);
    expect(spyCreateUser).toHaveBeenCalledWith(userToAdd);

    spyCreateUser.mockReset();
  });
});
