import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fourthyear2ndsemDto } from 'src/entities/fourthyear2ndsem.dto';
import { Repository } from 'typeorm';

@Injectable()
export class Fourthyear2ndsemService {
  constructor(
    @InjectRepository(Fourthyear2ndsemDto)
    private usersRepository: Repository<Fourthyear2ndsemDto>,
  ) {}

  async create(application: Fourthyear2ndsemDto): Promise<Fourthyear2ndsemDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<Fourthyear2ndsemDto[]> {
    return this.usersRepository.find();
  }
  async findOne(fourthyear2ndSemID: number): Promise<Fourthyear2ndsemDto> {
    return this.usersRepository.findOne(fourthyear2ndSemID);
  }
  async update(fourthyear2ndSemID: number, application: Fourthyear2ndsemDto) {
    return this.usersRepository.update(fourthyear2ndSemID, application);
  }
  async deleteOne(fourthyear2ndSemID: number) {
    return this;
  }
}
