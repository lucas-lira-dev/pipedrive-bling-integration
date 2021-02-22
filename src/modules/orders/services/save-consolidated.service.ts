import { Inject, Injectable } from '@nestjs/common';

import { FindOrdersService } from './find-orders.service';

import IOrderRepository from '../repositories/IOrderRepository';

@Injectable()
export class SaveConsolidatedService {
  constructor(
    @Inject('OrderRepositoryMongoose')
    private readonly orderRepository: IOrderRepository,
    private readonly findOrdersService: FindOrdersService,
  ) {}

  async execute() {
    const orders = await this.findOrdersService.execute();

    if (orders.retorno.erros) {
      return;
    }

    let valueTotal = 0;

    const date = new Date().toLocaleDateString();

    if (orders.retorno.pedidos) {
      orders.retorno.pedidos.forEach((order) => {
        if (
          order.pedido.data ===
          new Date().toLocaleDateString().split('/').reverse().join('-')
        ) {
          valueTotal += parseInt(order.pedido.totalvenda);
        }
      });
    }

    return await this.orderRepository.create({
      date,
      valueTotal,
    });
  }
}
