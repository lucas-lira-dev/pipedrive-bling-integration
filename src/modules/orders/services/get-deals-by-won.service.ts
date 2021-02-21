import { HttpService, Injectable } from '@nestjs/common';
import { IPipedriveDealsResponse } from 'src/@types/IDeals';

import { SetErrorService } from 'src/shared/services/set-error.service';

@Injectable()
export class GetDealsByWonService {
  constructor(
    private readonly httpService: HttpService,
    private readonly setErrorService: SetErrorService,
  ) {}

  async execute(): Promise<IPipedriveDealsResponse> {
    /**
     * Buscar as oportunidades com status igual a ganho no Pipedrive
     */
    const deals = await this.httpService
      .get(
        `${process.env.PIPEDRIVE_BASE_URL}/deals?status=won&start=0&api_token=${process.env.PIPEDRIVE_API_TOKEN}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      .toPromise()
      .then(({ data }) => data)
      .catch((error) => {
        this.setErrorService.execute(error);
      });

    return deals;
  }
}
