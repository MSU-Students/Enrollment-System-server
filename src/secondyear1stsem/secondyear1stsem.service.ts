import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Secondyear1stsemDto } from 'src/entities/secondyear1stsem.dto';
import { Repository } from 'typeorm';

@Injectable()
export class Secondyear1stsemService {
  constructor(
    @InjectRepository(Secondyear1stsemDto)
    private usersRepository: Repository<Secondyear1stsemDto>,
  ) {}

  async create(application: Secondyear1stsemDto): Promise<Secondyear1stsemDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<Secondyear1stsemDto[]> {
    return this.usersRepository.find();
  }
  async findOne(secondyear1stSemID: number): Promise<Secondyear1stsemDto> {
    return this.usersRepository.findOne(secondyear1stSemID);
  }
  async update(secondyear1stSemID: number, application: Secondyear1stsemDto) {
    return this.usersRepository.update(secondyear1stSemID, application);
  }
  async deleteOne(secondyear1stSemID: number) {
    return this.usersRepository.delete(secondyear1stSemID);
  }
}
