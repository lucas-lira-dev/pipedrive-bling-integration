import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';

import { OrdersModule } from './modules/orders/orders.module';
import { SharedModule } from './shared/shared.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';

config();

@Module({
  imports: [
    OrdersModule,
    SharedModule,
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
