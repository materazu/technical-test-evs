
import { Inject, Injectable } from '@nestjs/common';

import { USER_REPOSITORY } from '@evs/tokens';

import { UserRepository } from '../ports/user-repository.interface';
import { User } from '../entities/user.entity';

@Injectable()
export class UserDomainService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository
  ) {}

  getAllUsers(): User[] {
    return this.userRepository.findAll();
  }

  createUser(user: User): User[] {
    return this.userRepository.save(user);
  }
}

/* istanbul ignore next */
export class UserDomainServiceMock {
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  getAllUsers() { }
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  createUser() { }
}
