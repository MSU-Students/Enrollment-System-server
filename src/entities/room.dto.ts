import { Room } from './../interfaces/room.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Firstyear1stsemDto } from './firstyear1stsem.dto';
import { Firstyear2ndsemDto } from './firstyear2ndsem.dto';

@Entity('RoomAccount')
export class RoomDto implements Room {
  @PrimaryGeneratedColumn()
  roomID?: string;

  @ApiProperty({ example: 'Room101' })
  @Column()
  Room: string;

  @ApiProperty({ example: 'CIT BUILDING' })
  @Column()
  Description: string;

  @ApiProperty({ example: 'Open' })
  @Column()
  Status: string;

  @OneToMany(
    () => Firstyear1stsemDto,
    (firstYear1stSem) => firstYear1stSem.room,
  )
  firstYear1stSem: Firstyear1stsemDto[];
  firstYear2ndSem: Firstyear2ndsemDto[];
}
