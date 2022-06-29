import { Test, TestingModule } from '@nestjs/testing';
import { StudentRecordService } from './student-record.service';

describe('StudentRecordService', () => {
  let service: StudentRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentRecordService],
    }).compile();

    service = module.get<StudentRecordService>(StudentRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
