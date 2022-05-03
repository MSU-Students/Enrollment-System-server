import { Test, TestingModule } from '@nestjs/testing';
import { Thirdyear1stsemController } from './thirdyear1stsem.controller';

describe('Thirdyear1stsemController', () => {
  let controller: Thirdyear1stsemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Thirdyear1stsemController],
    }).compile();

    controller = module.get<Thirdyear1stsemController>(Thirdyear1stsemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
