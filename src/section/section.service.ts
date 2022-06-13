import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SectionDto } from 'src/entities/section.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(SectionDto)
    private sectionRepository: Repository<SectionDto>,
  ) {}

  async create(application: SectionDto): Promise<SectionDto> {
    return this.sectionRepository.save(application);
  }
  async findAll(): Promise<SectionDto[]> {
    return this.sectionRepository.find();
  }
  async findOne(SectionID: number): Promise<SectionDto> {
    return this.sectionRepository.findOne(SectionID);
  }
  async update(SectionID: number, application: SectionDto) {
    return this.sectionRepository.update(SectionID, application);
  }
  async deleteOne(SectionID: number) {
    return this.sectionRepository.delete(SectionID);
  }
}
