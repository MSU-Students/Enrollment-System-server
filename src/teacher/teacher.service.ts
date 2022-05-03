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
  async findOne(teacherID: number): Promise<TeacherDto> {
    return this.usersRepository.findOne(teacherID);
  }
  async update(teacherID: number, application: TeacherDto) {
    return this.usersRepository.update(teacherID, application);
  }
  async deleteOne(teacherID: number) {
    return this.usersRepository.delete(teacherID);
  }
}
