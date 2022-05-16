import { Room } from './../interfaces/room.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Firstyear1stsemDto } from './firstyear1stsem.dto';
import { Firstyear2ndsemDto } from './firstyear2ndsem.dto';
import { Secondyear1stsemDto } from './secondyear1stsem.dto';
import { Secondyear2ndsemDto } from './secondyear2ndsem.dto';
import { Thirdyear1stsemDto } from './thirdyear1stsem.dto';
import { Thirdyear2ndsemDto } from './thirdyear2ndsem.dto';
import { Fourthyear1stsemDto } from './fourthyear1stsem.dto';
import { Fourthyear2ndsemDto } from './fourthyear2ndsem.dto';

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
  secondYear1stSem: Secondyear1stsemDto[];
  secondyear2ndSem: Secondyear2ndsemDto[];
  thirdyear1stSem: Thirdyear1stsemDto[];
  thirdyear2ndSem: Thirdyear2ndsemDto[];
  fourthyear1stSem: Fourthyear1stsemDto[];
  fourthyear2ndSem: Fourthyear2ndsemDto[];
}
