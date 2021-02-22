import { HttpService, Injectable } from '@nestjs/common';

import { SetErrorService } from 'src/shared/services/set-error.service';
import { FindOrdersService } from './find-orders.service';

import { IPipedriveDealsResponse } from 'src/@types/IDeals';

import formPipedriveToBling from '../utils/formPipedriveToBling';
import formJsonToXml from '../utils/formJsonToXml';

@Injectable()
export class CreateOrdersService {
  constructor(
    private readonly httpService: HttpService,
    private readonly setErrorService: SetErrorService,
    private readonly findOrdersService: FindOrdersService,
  ) {}

  /**
   * Verificar se as oportunidade já foram cadastradas no Bling,
   * as que não estirem casdastradas serão cadastradas.
   */
  async execute(deals: IPipedriveDealsResponse) {
    const orders = await this.findOrdersService.execute();

    const formOrders = await formPipedriveToBling(deals);

    let xml = null;

    if (orders.retorno.erros) {
      xml = await formJsonToXml(formOrders);
    }

    if (orders.retorno.pedidos) {
      const requestXML = [];

      let findRegister = false;

      formOrders.forEach((orderXML) => {
        findRegister = false;
        orders.retorno.pedidos.forEach((order) => {
          if (order.pedido.numero === orderXML.id.toString()) {
            findRegister = true;
          }
        });

        if (!findRegister) {
          requestXML.push(orderXML);
        }
      });

      xml = await formJsonToXml(requestXML);
    }

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
          this.setErrorService.execute(error);
        });
    });

    return { response: 'Cadastros atualizados' };
  }
}
