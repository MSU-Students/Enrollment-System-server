import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdmissionDto } from '../entities/admission.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AdmissionService {
  constructor(
    @InjectRepository(AdmissionDto)
    private usersRepository: Repository<AdmissionDto>,
  ) {}

  async create(application: AdmissionDto): Promise<AdmissionDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<AdmissionDto[]> {
    return this.usersRepository.find();
  }
  async findOne(usersID: number): Promise<AdmissionDto> {
    return this.usersRepository.findOne(usersID);
  }
  async update(usersID: number, application: AdmissionDto) {
    return this.usersRepository.update(usersID, application);
  }
  async deleteOne(usersID: number) {
    return this.usersRepository.delete(usersID);
  }
}
