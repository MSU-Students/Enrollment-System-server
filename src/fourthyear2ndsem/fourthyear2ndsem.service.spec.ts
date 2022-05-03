import { Test, TestingModule } from '@nestjs/testing';
import { Fourthyear2ndsemService } from './fourthyear2ndsem.service';

describe('Fourthyear2ndsemService', () => {
  let service: Fourthyear2ndsemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Fourthyear2ndsemService],
    }).compile();

    service = module.get<Fourthyear2ndsemService>(Fourthyear2ndsemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
