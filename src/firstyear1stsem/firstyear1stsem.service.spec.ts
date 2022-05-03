import { Test, TestingModule } from '@nestjs/testing';
import { Firstyear1stsemService } from './firstyear1stsem.service';

describe('Firstyear1stsemService', () => {
  let service: Firstyear1stsemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Firstyear1stsemService],
    }).compile();

    service = module.get<Firstyear1stsemService>(Firstyear1stsemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
