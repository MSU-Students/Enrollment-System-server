import { Test, TestingModule } from '@nestjs/testing';
import { Fourthyear1stsemService } from './fourthyear1stsem.service';

describe('Fourthyear1stsemService', () => {
  let service: Fourthyear1stsemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Fourthyear1stsemService],
    }).compile();

    service = module.get<Fourthyear1stsemService>(Fourthyear1stsemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
