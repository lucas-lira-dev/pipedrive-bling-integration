import { Controller, Get } from '@nestjs/common';

import { CreateOrdersService } from '../services/create-orders.service';
import { GetConsolidatedService } from '../services/get-consolidated.service';
import { GetDealsByWonService } from '../services/get-deals-by-won.service';
import { SaveConsolidatedService } from '../services/save-consolidated.service';
@Controller('orders')
export class OrdersController {
  constructor(
    private readonly getDealsByWonService: GetDealsByWonService,
    private readonly createOrdersService: CreateOrdersService,
    private readonly saveConsolidatedService: SaveConsolidatedService,
    private readonly getConsolidatedService: GetConsolidatedService,
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

  /**
   * Buscar os pedidos do dia no Bling e
   * depois inseri-las no mongodb
   */
  @Get('saveConsolidated')
  async saveConsolidated() {
    try {
      const orders = await this.saveConsolidatedService.execute();
      return orders;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Buscar o consolidado no mongodb
   */
  @Get('getConsolidated')
  async getConsolidated() {
    try {
      const consolidated = await this.getConsolidatedService.execute();
      return consolidated;
    } catch (error) {
      throw error;
    }
  }
}
