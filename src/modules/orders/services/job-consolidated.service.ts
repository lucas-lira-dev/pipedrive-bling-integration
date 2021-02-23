import { Inject, Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { FindOrdersService } from './find-orders.service';

import IConsolidatedRepository from '../repositories/IConsolidatedRepository';

@Injectable()
export class JobConsolidatedService {
  constructor(
    @Inject('OrderRepositoryMongoose')
    private readonly orderRepository: IConsolidatedRepository,
    private readonly findOrdersService: FindOrdersService,
  ) {}

  /**
   * Job a ser executado uma vez por dia as 12am
   */
  @Cron('0 0 12 * * *')
  /**
   * Pegar os pedidos cadastradas no Bling, filtrar pelo dia atual
   * e enviar os dados para cadastrar no mongoDB
   */
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
