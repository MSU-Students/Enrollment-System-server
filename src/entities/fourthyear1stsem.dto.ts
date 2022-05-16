import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Fourthyear1stsem } from 'src/interfaces/fourthyear1stsem.interface';
import { SubjectDto } from './subject.dto';
import { TeacherDto } from './teacher.dto';
import { RoomDto } from './room.dto';

@Entity('fourthyear1stsem')
export class Fourthyear1stsemDto implements Fourthyear1stsem {
  @PrimaryGeneratedColumn()
  fourthyear1stSemID?: number;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(
    () => SubjectDto,
    (DescriptiveTitle) => DescriptiveTitle.fourthyear1stSemDescription,
    {
      nullable: true,
    },
  )
  DescriptiveTitle: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(() => SubjectDto, (Units) => Units.fourthyear1stSemunits, {
    nullable: true,
  })
  units: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(
    () => SubjectDto,
    (Schedule) => Schedule.fourthyear1stSemschedule,
    {
      nullable: true,
    },
  )
  Schedule: SubjectDto;

  @ApiProperty({ required: false, type: () => Fourthyear1stsemDto })
  @ManyToOne(() => SubjectDto, (subject) => subject.fourthyear1stSem, {
    nullable: true,
  })
  subject: SubjectDto;

  @ApiProperty({ required: false, type: () => Fourthyear1stsemDto })
  @ManyToOne(() => TeacherDto, (teacher) => teacher.fourthyear1stSem, {
    nullable: true,
  })
  teacher: TeacherDto;

  @ApiProperty({ required: false, type: () => Fourthyear1stsemDto })
  @ManyToOne(() => RoomDto, (room) => room.fourthyear1stSem, {
    nullable: true,
  })
  room: RoomDto;
}
