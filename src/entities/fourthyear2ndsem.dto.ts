import { ApiProperty } from '@nestjs/swagger';
import { Fourthyear2ndsem } from 'src/interfaces/fourthyear2ndsem.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fourthyear2ndsem')
export class Fourthyear2ndsemDto implements Fourthyear2ndsem {
  @PrimaryGeneratedColumn()
  fourthyear2ndSemID?: number;

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
