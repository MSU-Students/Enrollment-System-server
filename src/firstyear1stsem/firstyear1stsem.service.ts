import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Firstyear1stsemDto } from 'src/entities/firstyear1stsem.dto';
import { Like, Repository } from 'typeorm';

@Injectable()
export class Firstyear1stsemService {
  constructor(
    @InjectRepository(Firstyear1stsemDto)
    private firstyear1stsemRepository: Repository<Firstyear1stsemDto>,
  ) {}

  async create(application: Firstyear1stsemDto): Promise<Firstyear1stsemDto> {
    return this.firstyear1stsemRepository.save(application);
  }
  async findAll(): Promise<Firstyear1stsemDto[]> {
    return this.firstyear1stsemRepository.find({});
  }
  async findOne(firstyear1stSemID: number): Promise<Firstyear1stsemDto> {
    return this.firstyear1stsemRepository.findOne(firstyear1stSemID);
  }
  async filter(keyword: string): Promise<Firstyear1stsemDto[]> {
    return this.firstyear1stsemRepository.find({
      relations: ['subjectFirstyear1stsemRepository'],
      select: ['subject'],
      where: { purchaseStatus: Like(`%${keyword}%`) },
    });
  }
  async update(firstyear1stSemID: number, application: Firstyear1stsemDto) {
    return this.firstyear1stsemRepository.update(
      firstyear1stSemID,
      application,
    );
  }
  async deleteOne(firstyear1stSemID: number) {
    return this.firstyear1stsemRepository.delete(firstyear1stSemID);
  }
}
