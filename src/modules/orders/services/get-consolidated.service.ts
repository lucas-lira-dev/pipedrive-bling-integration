import { Inject, Injectable } from '@nestjs/common';

import IOrderRepository from '../repositories/IOrderRepository';

@Injectable()
export class GetConsolidatedService {
  constructor(
    @Inject('OrderRepositoryMongoose')
    private readonly orderRepository: IOrderRepository,
  ) {}

  async execute() {
    return await this.orderRepository.find();
  }
}
