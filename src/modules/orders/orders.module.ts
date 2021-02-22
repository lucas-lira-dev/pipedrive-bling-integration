import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OrdersController } from './controllers/orders.controller';

import { GetDealsByWonService } from './services/get-deals-by-won.service';
import { FindOrdersService } from './services/find-orders.service';
import { CreateOrdersService } from './services/create-orders.service';
import { SaveConsolidatedService } from './services/save-consolidated.service';

import { Order, OrderSchema } from './infra/mongoose/models/orders';
import { OrderRepositoryMongoose } from './infra/mongoose/repositories/orderRepository';
import { GetConsolidatedService } from './services/get-consolidated.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [OrdersController],
  providers: [
    GetDealsByWonService,
    FindOrdersService,
    CreateOrdersService,
    SaveConsolidatedService,
    OrderRepositoryMongoose,
    GetConsolidatedService,
  ],
  exports: [OrderRepositoryMongoose],
})
export class OrdersModule {}
