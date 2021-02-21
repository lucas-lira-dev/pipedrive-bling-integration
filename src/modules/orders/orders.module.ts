import { HttpModule, Module } from '@nestjs/common';

import { OrdersController } from './controllers/orders.controller';

import { GetDealsByWonService } from './services/get-deals-by-won.service';
import { FindOrdersService } from './services/find-orders.service';
import { CreateOrdersService } from './services/create-orders.service';

@Module({
  imports: [HttpModule],
  controllers: [OrdersController],
  providers: [GetDealsByWonService, FindOrdersService, CreateOrdersService],
})
export class OrdersModule {}
