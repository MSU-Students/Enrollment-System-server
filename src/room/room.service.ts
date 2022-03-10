import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomDto } from 'src/entities/room.dto';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomDto)
    private usersRepository: Repository<RoomDto>,
  ) {}

  async create(application: RoomDto): Promise<RoomDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<RoomDto[]> {
    return this.usersRepository.find();
  }
  async findOne(usersID: number): Promise<RoomDto> {
    return this.usersRepository.findOne(usersID);
  }
  async update(usersID: number, application: RoomDto) {
    return this.usersRepository.update(usersID, application);
  }
  async deleteOne(usersID: number) {
    return this.usersRepository.delete(usersID);
  }
}
