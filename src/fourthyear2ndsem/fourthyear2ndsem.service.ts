import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fourthyear2ndsemDto } from 'src/entities/fourthyear2ndsem.dto';
import { Repository } from 'typeorm';

@Injectable()
export class Fourthyear2ndsemService {
  constructor(
    @InjectRepository(Fourthyear2ndsemDto)
    private fourthyear2ndsemRepository: Repository<Fourthyear2ndsemDto>,
  ) {}

  async create(application: Fourthyear2ndsemDto): Promise<Fourthyear2ndsemDto> {
    return this.fourthyear2ndsemRepository.save(application);
  }
  async findAll(): Promise<Fourthyear2ndsemDto[]> {
    return this.fourthyear2ndsemRepository.find({
      relations: [
        'DescriptiveTitle',
        'units',
        'Schedule',
        'subject',
        'teacher',
        'room',
      ],
    });
  }
  async findOne(fourthyear2ndSemID: number): Promise<Fourthyear2ndsemDto> {
    return this.fourthyear2ndsemRepository.findOne(fourthyear2ndSemID);
  }
  async update(fourthyear2ndSemID: number, application: Fourthyear2ndsemDto) {
    return this.fourthyear2ndsemRepository.update(
      fourthyear2ndSemID,
      application,
    );
  }
  async deleteOne(fourthyear2ndSemID: number) {
    return this;
  }
}
