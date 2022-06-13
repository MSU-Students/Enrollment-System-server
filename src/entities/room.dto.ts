import { SchedulingDto } from './scheduling.dto';
import { Room } from './../interfaces/room.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Room')
export class RoomDto implements Room {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  roomID?: number;

  @ApiProperty({ example: 'Room101' })
  @Column()
  roomCode: string;

  @ApiProperty({ example: 'CNSM Building' })
  @Column()
  roomDescription: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @OneToMany(() => RoomDto, (room) => room.roomCode)
  Offered_Room: SchedulingDto;
}
