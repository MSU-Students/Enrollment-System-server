import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Thirdyear2ndsemDto } from 'src/entities/thirdyear2ndsem.dto';
import { Repository } from 'typeorm';

@Injectable()
export class Thirdyear2ndsemService {
  constructor(
    @InjectRepository(Thirdyear2ndsemDto)
    private usersRepository: Repository<Thirdyear2ndsemDto>,
  ) {}

  async create(application: Thirdyear2ndsemDto): Promise<Thirdyear2ndsemDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<Thirdyear2ndsemDto[]> {
    return this.usersRepository.find();
  }
  async findOne(thirdyear2ndSemID: number): Promise<Thirdyear2ndsemDto> {
    return this.usersRepository.findOne(thirdyear2ndSemID);
  }
  async update(thirdyear2ndSemID: number, application: Thirdyear2ndsemDto) {
    return this.usersRepository.update(thirdyear2ndSemID, application);
  }
}
