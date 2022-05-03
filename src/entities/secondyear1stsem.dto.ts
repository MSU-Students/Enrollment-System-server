import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Secondyear1stsem } from 'src/interfaces/secondyear1stsem.interface';

@Entity('secondyear1stsem')
export class Secondyear1stsemDto implements Secondyear1stsem {
  @PrimaryGeneratedColumn()
  secondyear1stSemID?: string;

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
