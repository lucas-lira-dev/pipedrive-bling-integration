import { Inject, Injectable } from '@nestjs/common';

import IConsolidatedRepository from '../repositories/IConsolidatedRepository';

@Injectable()
export class GetConsolidatedService {
  constructor(
    @Inject('OrderRepositoryMongoose')
    private readonly orderRepository: IConsolidatedRepository,
  ) {}

  async execute() {
    return await this.orderRepository.find();
  }
}
