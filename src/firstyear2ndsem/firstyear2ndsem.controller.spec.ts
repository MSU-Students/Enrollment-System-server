import { Test, TestingModule } from '@nestjs/testing';
import { Firstyear2ndsemController } from './firstyear2ndsem.controller';

describe('Firstyear2ndsemController', () => {
  let controller: Firstyear2ndsemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Firstyear2ndsemController],
    }).compile();

    controller = module.get<Firstyear2ndsemController>(Firstyear2ndsemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
