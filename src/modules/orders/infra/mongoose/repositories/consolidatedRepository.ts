import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import IConsolidatedRepository from '../../../repositories/IConsolidatedRepository';
import { Consolidated } from '../models/consolidated';

import { ConsolidatedDTO } from 'src/modules/orders/dtos/Consolidated.dto';
@Injectable()
export class OrderRepositoryMongoose implements IConsolidatedRepository {
  constructor(
    @InjectModel('Consolidated')
    private readonly consolidatedModel: Model<Consolidated>,
  ) {}

  public async find(): Promise<Consolidated[]> {
    const orders = await this.consolidatedModel.find().exec();
    return orders;
  }

  public async create(model: ConsolidatedDTO): Promise<Consolidated> {
    const createdConsolidated = new this.consolidatedModel({
      valueTotal: model.valueTotal,
      date: model.date,
    });
    return await createdConsolidated.save();
  }
}
