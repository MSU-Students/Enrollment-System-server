import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectDto } from 'src/entities/subject.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(SubjectDto)
    private usersRepository: Repository<SubjectDto>,
  ) {}

  async create(application: SubjectDto): Promise<SubjectDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<SubjectDto[]> {
    return this.usersRepository.find();
  }
  async findOne(subjectID: number): Promise<SubjectDto> {
    return this.usersRepository.findOne(subjectID);
  }
  async update(subjectID: number, application: SubjectDto) {
    return this.usersRepository.update(subjectID, application);
  }
  async deleteOne(subjectID: number) {
    return this.usersRepository.delete(subjectID);
  }
}
