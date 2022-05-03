import { Firstyear1stsem } from './../interfaces/firstyear1stsem.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('firstyear1stsem')
export class Firstyear1stsemDto implements Firstyear1stsem {
  @PrimaryGeneratedColumn()
  firstyear1stSemID?: number;

  @ApiProperty({ default: 'GEC' })
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
