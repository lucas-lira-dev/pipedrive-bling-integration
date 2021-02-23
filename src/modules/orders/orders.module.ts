import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OrdersController } from './controllers/orders.controller';

import { GetDealsByWonService } from './services/get-deals-by-won.service';
import { FindOrdersService } from './services/find-orders.service';
import { CreateOrdersService } from './services/create-orders.service';
import { JobConsolidatedService } from './services/job-consolidated.service';

import {
  Consolidated,
  OrderSchema,
} from './infra/mongoose/models/consolidated';
import { OrderRepositoryMongoose } from './infra/mongoose/repositories/consolidatedRepository';
import { GetConsolidatedService } from './services/get-consolidated.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: Consolidated.name, schema: OrderSchema },
    ]),
  ],
  controllers: [OrdersController],
  providers: [
    GetDealsByWonService,
    FindOrdersService,
    CreateOrdersService,
    JobConsolidatedService,
    OrderRepositoryMongoose,
    GetConsolidatedService,
  ],
  exports: [OrderRepositoryMongoose],
})
export class OrdersModule {}
