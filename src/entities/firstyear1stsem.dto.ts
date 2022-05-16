import { Schedule } from './../../dist/interfaces/schedule.interface.d';
import { Firstyear1stsem } from './../interfaces/firstyear1stsem.interface';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SubjectDto } from './subject.dto';
import { TeacherDto } from './teacher.dto';
import { RoomDto } from './room.dto';

@Entity('firstyear1stsem')
export class Firstyear1stsemDto implements Firstyear1stsem {
  @PrimaryGeneratedColumn()
  firstyear1stSemID?: number;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(
    () => SubjectDto,
    (DescriptiveTitle) => DescriptiveTitle.firstYear1stSemDescription,
  )
  DescriptiveTitle: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(() => SubjectDto, (Units) => Units.firstYear1stSemunits, {
    nullable: true,
  })
  units: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(() => SubjectDto, (Schedule) => Schedule, {
    nullable: true,
  })
  Schedule: SubjectDto;

  @ApiProperty({ required: false, type: () => Firstyear1stsemDto })
  @ManyToOne(() => SubjectDto, (subject) => subject.firstYear1stSem, {
    nullable: true,
  })
  subject: SubjectDto;

  @ApiProperty({ required: false, type: () => Firstyear1stsemDto })
  @ManyToOne(() => TeacherDto, (teacher) => teacher.firstYear1stSem, {
    nullable: true,
  })
  teacher: TeacherDto;

  @ApiProperty({ required: false, type: () => Firstyear1stsemDto })
  @ManyToOne(() => RoomDto, (room) => room.firstYear1stSem, {
    nullable: true,
  })
  room: RoomDto;
}
