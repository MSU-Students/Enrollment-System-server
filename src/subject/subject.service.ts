import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectDto } from 'src/entities/subject.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(SubjectDto)
    private subjectRepository: Repository<SubjectDto>,
  ) {}

  async create(application: SubjectDto): Promise<SubjectDto> {
    return this.subjectRepository.save(application);
  }
  async findAll(): Promise<SubjectDto[]> {
    return this.subjectRepository.find({
      relations: ['AYCodes'],
    });
  }
  async findOne(subjectID: number): Promise<SubjectDto> {
    return this.subjectRepository.findOne(subjectID);
  }
  async update(subjectID: number, application: SubjectDto) {
    return this.subjectRepository.update(subjectID, application);
  }
  async deleteOne(subjectID: number) {
    return this.subjectRepository.delete(subjectID);
  }
}
