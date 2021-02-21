import { HttpService, Injectable } from '@nestjs/common';

import { SetErrorService } from 'src/shared/services/set-error.service';

import { PipedriveDealsResponse } from 'src/@types/IDeals';

import formPipedriveToBling from '../utils/formPipedriveToBling';
import formJsonToXml from '../utils/formJsonToXml';

@Injectable()
export class CreateOrdersService {
  constructor(
    private readonly httpService: HttpService,
    private readonly errorService: SetErrorService,
  ) {}

  async execute(deals: PipedriveDealsResponse) {
    const orders = await formPipedriveToBling(deals);

    const xml = await formJsonToXml(orders);

    xml.forEach(async (xml) => {
      await this.httpService
        .post(
          `${process.env.BLING_BASE_URL}/pedido/json/?apikey=${process.env.BLING_API_TOKEN}&xml=${xml}`,
          {
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
            },
          },
        )
        .toPromise()
        .then(({ data }) => data)
        .catch((error) => {
          this.errorService.execute(error);
        });
    });

    return xml;
  }
}
