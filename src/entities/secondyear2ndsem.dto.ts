import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Secondyear2ndsem } from 'src/interfaces/secondyear2ndsem.interface';

@Entity('secondyear2ndsem')
export class Secondyear2ndsemDto implements Secondyear2ndsem {
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
