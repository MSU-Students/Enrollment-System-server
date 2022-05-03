import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Thirdyear1stsem } from 'src/interfaces/thirdyear1stsem.interface';

@Entity('thirdyear1stsem')
export class Thirdyear1stsemDto implements Thirdyear1stsem {
  @PrimaryGeneratedColumn()
  thirdyear1stSemID?: string;

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
