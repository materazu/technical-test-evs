import { Injectable } from '@nestjs/common';
import { UserDomainService } from '../../domain/services/user-domain.service';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class UserApplicationService {
  constructor(private readonly userDomainService: UserDomainService) {}

  getAllUsers(): User[] {
    return this.userDomainService.getAllUsers();
  }

  createUser(user: User): User[] {
    return this.userDomainService.createUser(user);
  }
}

/* istanbul ignore next */
export class UserApplicationServiceMock {
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  getAllUsers() { }
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  createUser() { }
}
