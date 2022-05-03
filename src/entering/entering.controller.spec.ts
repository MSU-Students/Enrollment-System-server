import { Test, TestingModule } from '@nestjs/testing';
import { EnteringController } from './entering.controller';

describe('EnteringController', () => {
  let controller: EnteringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnteringController],
    }).compile();

    controller = module.get<EnteringController>(EnteringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
