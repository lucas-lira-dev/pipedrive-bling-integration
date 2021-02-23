import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { config } from 'dotenv';

import { OrdersModule } from './modules/orders/orders.module';
import { SharedModule } from './shared/shared.module';

config();

@Module({
  imports: [
    OrdersModule,
    SharedModule,
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
    ScheduleModule.forRoot(),
  ],
})
export class AppModule {}
