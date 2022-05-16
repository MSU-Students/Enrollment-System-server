import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Thirdyear2ndsemDto } from 'src/entities/thirdyear2ndsem.dto';
import { Repository } from 'typeorm';

@Injectable()
export class Thirdyear2ndsemService {
  constructor(
    @InjectRepository(Thirdyear2ndsemDto)
    private thirdyear2ndsemRepository: Repository<Thirdyear2ndsemDto>,
  ) {}

  async create(application: Thirdyear2ndsemDto): Promise<Thirdyear2ndsemDto> {
    return this.thirdyear2ndsemRepository.save(application);
  }
  async findAll(): Promise<Thirdyear2ndsemDto[]> {
    return this.thirdyear2ndsemRepository.find({
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
  async findOne(thirdyear2ndSemID: number): Promise<Thirdyear2ndsemDto> {
    return this.thirdyear2ndsemRepository.findOne(thirdyear2ndSemID);
  }
  async update(thirdyear2ndSemID: number, application: Thirdyear2ndsemDto) {
    return this.thirdyear2ndsemRepository.update(
      thirdyear2ndSemID,
      application,
    );
  }
}
