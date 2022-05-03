import { Test, TestingModule } from '@nestjs/testing';
import { Fourthyear1stsemController } from './fourthyear1stsem.controller';

describe('Fourthyear1stsemController', () => {
  let controller: Fourthyear1stsemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Fourthyear1stsemController],
    }).compile();

    controller = module.get<Fourthyear1stsemController>(Fourthyear1stsemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
