import { Injectable } from '@nestjs/common';
import { PipedriveDealsResponse } from 'src/@types/IDeals';
import { PipedriveDealsResponseDTO } from '../dtos/PipedriveDealsResponse.dto';

@Injectable()
export class CreateOrdersService {
  async execute(deals: PipedriveDealsResponse) {
    const { data } = deals;

    const orders = await data.map((data) => {
      const items = {
        id: data.id,
        personName: data.person_name,
        value: data.value,
        title: data.title,
        orgName: data.org_name,
        date: data.won_time,
      };
      return items;
    });

    return orders;
  }
}
