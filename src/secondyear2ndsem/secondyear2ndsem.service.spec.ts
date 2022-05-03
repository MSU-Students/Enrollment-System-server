import { Test, TestingModule } from '@nestjs/testing';
import { Secondyear2ndsemService } from './secondyear2ndsem.service';

describe('Secondyear2ndsemService', () => {
  let service: Secondyear2ndsemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Secondyear2ndsemService],
    }).compile();

    service = module.get<Secondyear2ndsemService>(Secondyear2ndsemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
