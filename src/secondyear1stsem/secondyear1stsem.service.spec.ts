import { Test, TestingModule } from '@nestjs/testing';
import { Secondyear1stsemService } from './secondyear1stsem.service';

describe('Secondyear1stsemService', () => {
  let service: Secondyear1stsemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Secondyear1stsemService],
    }).compile();

    service = module.get<Secondyear1stsemService>(Secondyear1stsemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
