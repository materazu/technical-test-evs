import { User } from '../entities/user.entity';

export interface UserRepository {
  findAll(): User[];
  save(user: User): User[];
}
