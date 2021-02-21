import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './modules/orders/orders.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [OrdersModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
