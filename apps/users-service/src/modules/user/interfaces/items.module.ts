import { Module } from '@nestjs/common';
import { UserController } from './rest/user.controller';
import { UserApplicationService } from '../application/services/user-application.service';
import { UserDomainService } from '../domain/services/user-domain.service';
import { UserRepositoryImpl } from '../infrastructure/repositories/user-repository.impl';
import { USER_REPOSITORY } from '@evs/tokens';

@Module({
  controllers: [UserController],
  providers: [
    UserApplicationService,
    UserDomainService,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepositoryImpl,
    },
  ],
})
export class UserModule {}
