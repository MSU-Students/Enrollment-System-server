import { Test, TestingModule } from '@nestjs/testing';
import { ReportandreportsController } from './reportandreports.controller';

describe('ReportandreportsController', () => {
  let controller: ReportandreportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportandreportsController],
    }).compile();

    controller = module.get<ReportandreportsController>(ReportandreportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
