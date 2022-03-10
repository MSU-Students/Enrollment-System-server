import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeacherDto } from 'src/entities/teacher.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(TeacherDto)
    private usersRepository: Repository<TeacherDto>,
  ) {}

  async create(application: TeacherDto): Promise<TeacherDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<TeacherDto[]> {
    return this.usersRepository.find();
  }
  async findOne(usersID: number): Promise<TeacherDto> {
    return this.usersRepository.findOne(usersID);
  }
  async update(usersID: number, application: TeacherDto) {
    return this.usersRepository.update(usersID, application);
  }
  async deleteOne(usersID: number) {
    return this.usersRepository.delete(usersID);
  }
}
