import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/ports/user-repository.interface';
import { User } from '../../domain/entities/user.entity';
import { LocalStoreService } from '@evs/services';

const usersDb = new LocalStoreService();

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  findAll(): User[] {
    return usersDb.store;
  }

  save(user: User): User[] {
    usersDb.add(user);
    return usersDb.store;
  }
}
