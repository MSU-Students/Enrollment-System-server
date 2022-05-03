import { ApiProperty } from '@nestjs/swagger';
import { Firstyear2ndsem } from 'src/interfaces/firstyear2ndsem.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('firstyear2ndsem')
export class Firstyear2ndsemDto implements Firstyear2ndsem {
  @PrimaryGeneratedColumn()
  firstyear2ndSemID?: number;

  @ApiProperty()
  @Column()
  subject: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  units: string;

  @ApiProperty()
  @Column()
  teacher: string;

  @ApiProperty()
  @Column()
  room: string;

  @ApiProperty()
  @Column()
  schedule: string;
}
