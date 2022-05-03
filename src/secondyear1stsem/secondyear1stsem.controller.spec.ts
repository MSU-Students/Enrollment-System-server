import { Test, TestingModule } from '@nestjs/testing';
import { Secondyear1stsemController } from './secondyear1stsem.controller';

describe('Secondyear1stsemController', () => {
  let controller: Secondyear1stsemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Secondyear1stsemController],
    }).compile();

    controller = module.get<Secondyear1stsemController>(Secondyear1stsemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
