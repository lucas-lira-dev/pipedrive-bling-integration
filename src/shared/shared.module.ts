import { Global, Module } from '@nestjs/common';

import { SetErrorService } from './services/set-error.service';

@Global()
@Module({
  providers: [SetErrorService],
  exports: [SetErrorService],
})
export class SharedModule {}
