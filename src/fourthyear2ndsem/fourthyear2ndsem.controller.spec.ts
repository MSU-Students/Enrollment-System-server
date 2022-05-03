import { Test, TestingModule } from '@nestjs/testing';
import { Fourthyear2ndsemController } from './fourthyear2ndsem.controller';

describe('Fourthyear2ndsemController', () => {
  let controller: Fourthyear2ndsemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Fourthyear2ndsemController],
    }).compile();

    controller = module.get<Fourthyear2ndsemController>(Fourthyear2ndsemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
