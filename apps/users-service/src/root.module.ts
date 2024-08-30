import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/interfaces/user.module';

@Module({
  imports: [UserModule],
})
export class RootModule {}
