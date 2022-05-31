import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SchoolYearDto } from 'src/entities/school-year.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SchoolYearService {
  constructor(
    @InjectRepository(SchoolYearDto)
    private usersRepository: Repository<SchoolYearDto>,
  ) {}

  async create(application: SchoolYearDto): Promise<SchoolYearDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<SchoolYearDto[]> {
    return this.usersRepository.find();
  }
  async findOne(SchoolYearID: number): Promise<SchoolYearDto> {
    return this.usersRepository.findOne(SchoolYearID);
  }
  async update(schoolyearID: number, application: SchoolYearDto) {
    return this.usersRepository.update(schoolyearID, application);
  }
  async deleteOne(schoolyearID: number) {
    return this.usersRepository.delete(schoolyearID);
  }
}
