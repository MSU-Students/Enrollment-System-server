import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseDto } from 'src/entities/course.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseDto)
    private usersRepository: Repository<CourseDto>,
  ) {}

  async create(application: CourseDto): Promise<CourseDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<CourseDto[]> {
    return this.usersRepository.find();
  }
  async findOne(courseID: number): Promise<CourseDto> {
    return this.usersRepository.findOne(courseID);
  }
  async update(courseID: number, application: CourseDto) {
    return this.usersRepository.update(courseID, application);
  }
  async deleteOne(courseID: number) {
    return this.usersRepository.delete(courseID);
  }
}
