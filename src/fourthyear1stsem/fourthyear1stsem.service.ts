import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fourthyear1stsemDto } from 'src/entities/fourthyear1stsem.dto';
import { Repository } from 'typeorm';

@Injectable()
export class Fourthyear1stsemService {
  constructor(
    @InjectRepository(Fourthyear1stsemDto)
    private usersRepository: Repository<Fourthyear1stsemDto>,
  ) {}

  async create(application: Fourthyear1stsemDto): Promise<Fourthyear1stsemDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<Fourthyear1stsemDto[]> {
    return this.usersRepository.find();
  }
  async findOne(fourthyear1stSemID: number): Promise<Fourthyear1stsemDto> {
    return this.usersRepository.findOne(fourthyear1stSemID);
  }
  async update(fourthyear1stSemID: number, application: Fourthyear1stsemDto) {
    return this.usersRepository.update(fourthyear1stSemID, application);
  }
  async deleteOne(fourthyear1stSemID: number) {
    return this.usersRepository.delete(fourthyear1stSemID);
  }
}
