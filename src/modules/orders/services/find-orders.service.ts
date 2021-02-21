import { HttpService, Injectable } from '@nestjs/common';
import {
  IBlingOrdersResponse,
  IBlingOrdersResponseError,
} from 'src/@types/IOrders';

import { SetErrorService } from 'src/shared/services/set-error.service';

@Injectable()
export class FindOrdersService {
  constructor(
    private readonly httpService: HttpService,
    private readonly setErrorService: SetErrorService,
  ) {}

  async execute(): Promise<IBlingOrdersResponse | IBlingOrdersResponseError> {
    /**
     * Buscar os Pedidos no Bling
     */
    const orders = await this.httpService
      .get(
        `${process.env.BLING_BASE_URL}/pedidos/json/?apikey=${process.env.BLING_API_TOKEN}`,
      )
      .toPromise()
      .then(({ data }) => data)
      .catch((error) => {
        this.setErrorService.execute(error);
      });

    return orders;
  }
}
