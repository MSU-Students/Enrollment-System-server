import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Secondyear2ndsemDto } from 'src/entities/secondyear2ndsem.dto';
import { Repository } from 'typeorm';

@Injectable()
export class Secondyear2ndsemService {
  constructor(
    @InjectRepository(Secondyear2ndsemDto)
    private usersRepository: Repository<Secondyear2ndsemDto>,
  ) {}

  async create(application: Secondyear2ndsemDto): Promise<Secondyear2ndsemDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<Secondyear2ndsemDto[]> {
    return this.usersRepository.find();
  }
  async findOne(secondyear2ndSemID: number): Promise<Secondyear2ndsemDto> {
    return this.usersRepository.findOne(secondyear2ndSemID);
  }
  async update(secondyear2ndSemID: number, application: Secondyear2ndsemDto) {
    return this.usersRepository.update(secondyear2ndSemID, application);
  }
}
