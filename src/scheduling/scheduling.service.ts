import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SchedulingDto } from 'src/entities/scheduling.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SchedulingService {
  constructor(
    @InjectRepository(SchedulingDto)
    private schedulingRepository: Repository<SchedulingDto>,
  ) {}

  async create(application: SchedulingDto): Promise<SchedulingDto> {
    return this.schedulingRepository.save(application);
  }
  async findAll(): Promise<SchedulingDto[]> {
    return this.schedulingRepository.find({
      relations: [
        'DescriptiveTitle',
        'Section',
        'SubjectCodes',
        'Teachers',
        'Courses',
        'AcademicYear',
      ],
    });
  }
  async findOne(scheduleID: number): Promise<SchedulingDto> {
    return this.schedulingRepository.findOne(scheduleID);
  }
  async update(scheduleID: number, application: SchedulingDto) {
    return this.schedulingRepository.update(scheduleID, application);
  }
  async deleteOne(scheduleID: number) {
    return this.schedulingRepository.delete(scheduleID);
  }
}
