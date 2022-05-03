import { Test, TestingModule } from '@nestjs/testing';
import { Thirdyear1stsemService } from './thirdyear1stsem.service';

describe('Thirdyear1stsemService', () => {
  let service: Thirdyear1stsemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Thirdyear1stsemService],
    }).compile();

    service = module.get<Thirdyear1stsemService>(Thirdyear1stsemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
