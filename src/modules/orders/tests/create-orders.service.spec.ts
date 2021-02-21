import { Test, TestingModule } from '@nestjs/testing';
import { CreateOrdersService } from '../services/create-orders.service';

describe('CreateOrdersService', () => {
  let service: CreateOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateOrdersService],
    }).compile();

    service = module.get<CreateOrdersService>(CreateOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
