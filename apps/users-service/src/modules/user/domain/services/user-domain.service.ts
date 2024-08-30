
import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../ports/user-repository.interface';
import { User } from '../entities/user.entity';
import { USER_REPOSITORY } from '@evs/tokens';

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
