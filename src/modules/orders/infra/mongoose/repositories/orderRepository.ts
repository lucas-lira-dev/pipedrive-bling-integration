import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import IOrderRepository from '../../../repositories/IOrderRepository';
import { Order } from '../models/orders';

import { ConsolidatedDTO } from 'src/modules/orders/dtos/Consolidated.dto';
@Injectable()
export class OrderRepositoryMongoose implements IOrderRepository {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {}

  public async find(): Promise<Order[]> {
    const orders = await this.orderModel.find().exec();
    return orders;
  }

  public async create(model: ConsolidatedDTO): Promise<Order> {
    const createdConsolidated = new this.orderModel({
      valueTotal: model.valueTotal,
      date: model.date,
    });
    return await createdConsolidated.save();
  }
}
