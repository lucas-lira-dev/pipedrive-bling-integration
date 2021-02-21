import { HttpService, Injectable } from '@nestjs/common';
import { PipedriveDealsResponse } from 'src/@types/IDeals';

import { SetErrorService } from 'src/shared/services/set-error.service';

@Injectable()
export class GetDealsByWonService {
  constructor(
    private readonly httpService: HttpService,
    private readonly errorService: SetErrorService,
  ) {}

  async execute(): Promise<PipedriveDealsResponse> {
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
        this.errorService.execute(error);
      });

    return deals;
  }
}
