import { Room } from './../interfaces/room.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

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
}
