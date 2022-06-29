import { Test, TestingModule } from '@nestjs/testing';
import { StudentRecordController } from './student-record.controller';

describe('StudentRecordController', () => {
  let controller: StudentRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentRecordController],
    }).compile();

    controller = module.get<StudentRecordController>(StudentRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
