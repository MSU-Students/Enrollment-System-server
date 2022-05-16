import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Firstyear2ndsemDto } from 'src/entities/firstyear2ndsem.dto';
import { Repository } from 'typeorm';

@Injectable()
export class Firstyear2ndsemService {
  constructor(
    @InjectRepository(Firstyear2ndsemDto)
    private firstyear2ndsemRepository: Repository<Firstyear2ndsemDto>,
  ) {}

  async create(application: Firstyear2ndsemDto): Promise<Firstyear2ndsemDto> {
    return this.firstyear2ndsemRepository.save(application);
  }
  async findAll(): Promise<Firstyear2ndsemDto[]> {
    return this.firstyear2ndsemRepository.find({
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
  async findOne(firstyear2ndSemID: number): Promise<Firstyear2ndsemDto> {
    return this.firstyear2ndsemRepository.findOne(firstyear2ndSemID);
  }
  async update(firstyear2ndSemID: number, application: Firstyear2ndsemDto) {
    return this.firstyear2ndsemRepository.update(
      firstyear2ndSemID,
      application,
    );
  }
  async deleteOne(firstyear2ndSemID: number) {
    return this.firstyear2ndsemRepository.delete(firstyear2ndSemID);
  }
}
