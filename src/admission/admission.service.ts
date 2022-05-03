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
  async findOne(admissionID: number): Promise<AdmissionDto> {
    return this.usersRepository.findOne(admissionID);
  }
  async update(admissionID: number, application: AdmissionDto) {
    return this.usersRepository.update(admissionID, application);
  }
  async deleteOne(admissionID: number) {
    return this.usersRepository.delete(admissionID);
  }
}
