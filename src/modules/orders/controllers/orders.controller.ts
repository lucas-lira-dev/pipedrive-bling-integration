import { Controller, Get } from '@nestjs/common';

import { CreateOrdersService } from '../services/create-orders.service';
import { FindOrdersService } from '../services/find-orders.service';
import { GetDealsByWonService } from '../services/get-deals-by-won.service';

@Controller('order')
export class OrdersController {
  constructor(
    private readonly getDealsByWonService: GetDealsByWonService,
    private readonly createOrdersService: CreateOrdersService, // private readonly findOrdersService: FindOrdersService,
  ) {}

  /**
   * Função que busca as oportunidades no Pipedrive.
   */
  @Get()
  async getDeals() {
    try {
      const deals = await this.getDealsByWonService.execute();
      const orders = await this.createOrdersService.execute(deals);
      //   await this.CreateOrdersService.execute(orders);
      return orders;
    } catch (error) {
      throw error;
    }
  }
}
