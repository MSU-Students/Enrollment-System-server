import { Test, TestingModule } from '@nestjs/testing';
import { Firstyear2ndsemService } from './firstyear2ndsem.service';

describe('Firstyear2ndsemService', () => {
  let service: Firstyear2ndsemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Firstyear2ndsemService],
    }).compile();

    service = module.get<Firstyear2ndsemService>(Firstyear2ndsemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
