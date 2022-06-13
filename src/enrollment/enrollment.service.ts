import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnrollmentDto } from 'src/entities/enrollment.dto';
import { Repository } from 'typeorm';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(EnrollmentDto)
    private enrollmentRepository: Repository<EnrollmentDto>,
  ) {}

  async create(application: EnrollmentDto): Promise<EnrollmentDto> {
    return this.enrollmentRepository.save(application);
  }
  async findAll(): Promise<EnrollmentDto[]> {
    return this.enrollmentRepository.find({
      relations: [
        'studentIdnumber',
        'course',
        // 'studentfullname',
        // 'course',
        // 'section',
        // 'yearLevel',
        // 'semester',
        // 'teacher',
        // 'descriptiveTitle',
        // 'units',
        // 'day',
        // 'day2',
        // 'time',
        // 'time2',
      ],
    });
  }
  async findOne(enrollmentID: number): Promise<EnrollmentDto> {
    return this.enrollmentRepository.findOne(enrollmentID);
  }
  async update(enrollmentID: number, application: EnrollmentDto) {
    return this.enrollmentRepository.update(enrollmentID, application);
  }
  async deleteOne(enrollmentID: number) {
    return this.enrollmentRepository.delete(enrollmentID);
  }
}
