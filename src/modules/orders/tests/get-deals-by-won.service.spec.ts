import { Test, TestingModule } from '@nestjs/testing';
import { GetDealsByWonService } from '../services/get-deals-by-won.service';

describe('GetDealsByWonService', () => {
  let service: GetDealsByWonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetDealsByWonService],
    }).compile();

    service = module.get<GetDealsByWonService>(GetDealsByWonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
