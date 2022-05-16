import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Thirdyear1stsemDto } from 'src/entities/thirdyear1stsem.dto';
import { Repository } from 'typeorm';

@Injectable()
export class Thirdyear1stsemService {
  constructor(
    @InjectRepository(Thirdyear1stsemDto)
    private thirdyear1stsemRepository: Repository<Thirdyear1stsemDto>,
  ) {}

  async create(application: Thirdyear1stsemDto): Promise<Thirdyear1stsemDto> {
    return this.thirdyear1stsemRepository.save(application);
  }
  async findAll(): Promise<Thirdyear1stsemDto[]> {
    return this.thirdyear1stsemRepository.find({
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
  async findOne(thirdyear1stSemID: number): Promise<Thirdyear1stsemDto> {
    return this.thirdyear1stsemRepository.findOne(thirdyear1stSemID);
  }
  async update(thirdyear1stSemID: number, application: Thirdyear1stsemDto) {
    return this.thirdyear1stsemRepository.update(
      thirdyear1stSemID,
      application,
    );
  }
  async deleteOne(thirdyear1stSemID: number) {
    return this.thirdyear1stsemRepository.delete(thirdyear1stSemID);
  }
}
