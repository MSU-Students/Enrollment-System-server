import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentRecordDto } from 'src/entities/student-record.dto';
import { Repository } from 'typeorm';

@Injectable()
export class StudentRecordService {
  constructor(
    @InjectRepository(StudentRecordDto)
    private StudentRecordRepository: Repository<StudentRecordDto>,
  ) {}

  async create(application: StudentRecordDto): Promise<StudentRecordDto> {
    return this.StudentRecordRepository.save(application);
  }
  async findAll(): Promise<StudentRecordDto[]> {
    return this.StudentRecordRepository.find({
      relations: ['Idnumber', 'enrolledSub'],
    });
  }
  async findOne(invoiceID: number): Promise<StudentRecordDto> {
    return this.StudentRecordRepository.findOne(invoiceID);
  }
  async update(invoiceID: number, application: StudentRecordDto) {
    return this.StudentRecordRepository.update(invoiceID, application);
  }
  async deleteOne(invoiceID: number) {
    return this.StudentRecordRepository.delete(invoiceID);
  }
}
