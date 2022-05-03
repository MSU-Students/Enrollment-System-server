import { Test, TestingModule } from '@nestjs/testing';
import { Thirdyear2ndsemService } from './thirdyear2ndsem.service';

describe('Thirdyear2ndsemService', () => {
  let service: Thirdyear2ndsemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Thirdyear2ndsemService],
    }).compile();

    service = module.get<Thirdyear2ndsemService>(Thirdyear2ndsemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
