import { Test, TestingModule } from '@nestjs/testing';
import { Thirdyear2ndsemController } from './thirdyear2ndsem.controller';

describe('Thirdyear2ndsemController', () => {
  let controller: Thirdyear2ndsemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Thirdyear2ndsemController],
    }).compile();

    controller = module.get<Thirdyear2ndsemController>(Thirdyear2ndsemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
