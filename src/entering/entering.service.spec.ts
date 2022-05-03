import { Test, TestingModule } from '@nestjs/testing';
import { EnteringService } from './entering.service';

describe('EnteringService', () => {
  let service: EnteringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnteringService],
    }).compile();

    service = module.get<EnteringService>(EnteringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
