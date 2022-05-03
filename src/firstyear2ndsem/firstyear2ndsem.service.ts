import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Firstyear2ndsemDto } from 'src/entities/firstyear2ndsem.dto';
import { Repository } from 'typeorm';

@Injectable()
export class Firstyear2ndsemService {
  constructor(
    @InjectRepository(Firstyear2ndsemDto)
    private usersRepository: Repository<Firstyear2ndsemDto>,
  ) {}

  async create(application: Firstyear2ndsemDto): Promise<Firstyear2ndsemDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<Firstyear2ndsemDto[]> {
    return this.usersRepository.find();
  }
  async findOne(firstyear2ndSemID: number): Promise<Firstyear2ndsemDto> {
    return this.usersRepository.findOne(firstyear2ndSemID);
  }
  async update(firstyear2ndSemID: number, application: Firstyear2ndsemDto) {
    return this.usersRepository.update(firstyear2ndSemID, application);
  }
  async deleteOne(firstyear2ndSemID: number) {
    return this;
  }
}
