import { Test, TestingModule } from '@nestjs/testing';
import { Firstyear1stsemController } from './firstyear1stsem.controller';

describe('Firstyear1stsemController', () => {
  let controller: Firstyear1stsemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Firstyear1stsemController],
    }).compile();

    controller = module.get<Firstyear1stsemController>(Firstyear1stsemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
