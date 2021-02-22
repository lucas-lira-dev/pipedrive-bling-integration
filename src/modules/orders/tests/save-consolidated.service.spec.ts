import { Test, TestingModule } from '@nestjs/testing';
import { SaveConsolidatedService } from '../services/save-consolidated.service';

describe('SaveConsolidatedService', () => {
  let service: SaveConsolidatedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaveConsolidatedService],
    }).compile();

    service = module.get<SaveConsolidatedService>(SaveConsolidatedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
