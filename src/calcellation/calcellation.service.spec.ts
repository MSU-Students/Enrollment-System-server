import { Test, TestingModule } from '@nestjs/testing';
import { CalcellationService } from './calcellation.service';

describe('CalcellationService', () => {
  let service: CalcellationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalcellationService],
    }).compile();

    service = module.get<CalcellationService>(CalcellationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
