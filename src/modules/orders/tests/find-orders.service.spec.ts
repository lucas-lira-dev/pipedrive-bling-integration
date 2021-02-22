import { Test, TestingModule } from '@nestjs/testing';
import { FindOrdersService } from '../services/find-orders.service';

describe('FindOrdersService', () => {
  let service: FindOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOrdersService],
    }).compile();

    service = module.get<FindOrdersService>(FindOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
