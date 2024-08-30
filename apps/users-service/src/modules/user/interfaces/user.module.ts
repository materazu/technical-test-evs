import { Module } from '@nestjs/common';

import { LOCAL_STORE_SERVICE, USER_REPOSITORY } from '@evs/tokens';

import { UserController } from './rest/user.controller';

import { UserApplicationService } from '../application/services/user-application.service';
import { UserDomainService } from '../domain/services/user-domain.service';
import { UserRepositoryImpl } from '../infrastructure/repositories/user-repository.impl';
import { LocalStoreService } from '@evs/services';

@Module({
  controllers: [UserController],
  providers: [
    UserApplicationService,
    UserDomainService,
    {
      provide: LOCAL_STORE_SERVICE,
      useClass: LocalStoreService,
    },
    {
      provide: USER_REPOSITORY,
      useClass: UserRepositoryImpl,
    },
  ],
})
export class UserModule {}
