import { Test, TestingModule } from '@nestjs/testing';
import { CalcellationController } from './calcellation.controller';

describe('CalcellationController', () => {
  let controller: CalcellationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalcellationController],
    }).compile();

    controller = module.get<CalcellationController>(CalcellationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
