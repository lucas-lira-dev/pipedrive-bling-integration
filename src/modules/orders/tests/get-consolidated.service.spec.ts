import { Test, TestingModule } from '@nestjs/testing';
import { GetConsolidatedService } from '../services/get-consolidated.service';

describe('GetConsolidatedService', () => {
  let service: GetConsolidatedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetConsolidatedService],
    }).compile();

    service = module.get<GetConsolidatedService>(GetConsolidatedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
