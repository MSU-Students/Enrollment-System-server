import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Thirdyear2ndsem } from 'src/interfaces/thirdyear2ndsem.interface';

@Entity('thirdyear2ndsem')
export class Thirdyear2ndsemDto implements Thirdyear2ndsem {
  @PrimaryGeneratedColumn()
  thirdyear2ndSemID?: string;

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
