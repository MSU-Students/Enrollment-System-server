import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Fourthyear1stsem } from 'src/interfaces/fourthyear1stsem.interface';

@Entity('fourthyear1stsem')
export class Fourthyear1stsemDto implements Fourthyear1stsem {
  @PrimaryGeneratedColumn()
  fourthyear1stSemID?: number;

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
