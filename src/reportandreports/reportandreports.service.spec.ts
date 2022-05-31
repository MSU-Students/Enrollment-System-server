import { Test, TestingModule } from '@nestjs/testing';
import { ReportandreportsService } from './reportandreports.service';

describe('ReportandreportsService', () => {
  let service: ReportandreportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportandreportsService],
    }).compile();

    service = module.get<ReportandreportsService>(ReportandreportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
