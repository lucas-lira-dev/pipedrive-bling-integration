import { Controller, Get } from '@nestjs/common';

import { CreateOrdersService } from '../services/create-orders.service';
import { GetDealsByWonService } from '../services/get-deals-by-won.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly getDealsByWonService: GetDealsByWonService,
    private readonly createOrdersService: CreateOrdersService,
  ) {}

  /**
   * Buscar as oportunidades com status igual a ganho no Pipedrive,
   * depois inseri-las como pedido no Bling
   */
  @Get()
  async getDeals() {
    try {
      const deals = await this.getDealsByWonService.execute();
      const orders = await this.createOrdersService.execute(deals);
      return orders;
    } catch (error) {
      throw error;
    }
  }
}
