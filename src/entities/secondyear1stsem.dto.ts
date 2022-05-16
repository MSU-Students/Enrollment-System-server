import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Secondyear1stsem } from 'src/interfaces/secondyear1stsem.interface';
import { SubjectDto } from './subject.dto';
import { RoomDto } from './room.dto';
import { TeacherDto } from './teacher.dto';

@Entity('secondyear1stsem')
export class Secondyear1stsemDto implements Secondyear1stsem {
  @PrimaryGeneratedColumn()
  secondyear1stSemID?: number;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(
    () => SubjectDto,
    (DescriptiveTitle) => DescriptiveTitle.secondYear1stSemDescription,
  )
  DescriptiveTitle: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(() => SubjectDto, (Units) => Units.secondYear1stSemunits, {
    nullable: true,
  })
  units: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(
    () => SubjectDto,
    (Schedule) => Schedule.secondYear1stSemschedule,
    {
      nullable: true,
    },
  )
  Schedule: SubjectDto;

  @ApiProperty({ required: false, type: () => Secondyear1stsemDto })
  @ManyToOne(() => SubjectDto, (subject) => subject.secondYear1stSem, {
    nullable: true,
  })
  subject: SubjectDto;

  @ApiProperty({ required: false, type: () => Secondyear1stsemDto })
  @ManyToOne(() => TeacherDto, (teacher) => teacher.secondYear1stSem, {
    nullable: true,
  })
  teacher: TeacherDto;

  @ApiProperty({ required: false, type: () => Secondyear1stsemDto })
  @ManyToOne(() => RoomDto, (room) => room.secondYear1stSem, {
    nullable: true,
  })
  room: RoomDto;
}
