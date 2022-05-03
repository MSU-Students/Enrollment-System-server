import { Test, TestingModule } from '@nestjs/testing';
import { Secondyear2ndsemController } from './secondyear2ndsem.controller';

describe('Secondyear2ndsemController', () => {
  let controller: Secondyear2ndsemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Secondyear2ndsemController],
    }).compile();

    controller = module.get<Secondyear2ndsemController>(Secondyear2ndsemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
