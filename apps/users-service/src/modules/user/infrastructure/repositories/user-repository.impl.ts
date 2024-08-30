import { Inject, Injectable } from '@nestjs/common';

import { LocalStoreService } from '@evs/services';
import { LOCAL_STORE_SERVICE } from '@evs/tokens';

import { UserRepository } from '../../domain/ports/user-repository.interface';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @Inject(LOCAL_STORE_SERVICE) private readonly localStoreService: LocalStoreService
  ) {}

  findAll(): User[] {
    return this.localStoreService.store;
  }

  save(user: User): User[] {
    this.localStoreService.add(user);

    return this.findAll();
  }
}

/* istanbul ignore next */
export class UserRepositoryImplMock {
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  findAll() { }
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  save() { }
}
