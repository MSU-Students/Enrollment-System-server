import { ApiProperty } from '@nestjs/swagger';
import { Fourthyear2ndsem } from 'src/interfaces/fourthyear2ndsem.interface';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoomDto } from './room.dto';
import { SubjectDto } from './subject.dto';
import { TeacherDto } from './teacher.dto';

@Entity('fourthyear2ndsem')
export class Fourthyear2ndsemDto implements Fourthyear2ndsem {
  @PrimaryGeneratedColumn()
  fourthyear2ndSemID?: number;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(
    () => SubjectDto,
    (DescriptiveTitle) => DescriptiveTitle.fourthyear2ndSemDescription,
    {
      nullable: true,
    },
  )
  DescriptiveTitle: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(() => SubjectDto, (units) => units.fourthyear2ndSemunits, {
    nullable: true,
  })
  units: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(
    () => SubjectDto,
    (Schedule) => Schedule.fourthyear2ndSemschedule,
    {
      nullable: true,
    },
  )
  Schedule: SubjectDto;

  @ApiProperty({ required: false, type: () => Fourthyear2ndsemDto })
  @ManyToOne(() => SubjectDto, (subject) => subject.fourthyear2ndSem, {
    nullable: true,
  })
  subject: SubjectDto;

  @ApiProperty({ required: false, type: () => Fourthyear2ndsemDto })
  @ManyToOne(() => TeacherDto, (teacher) => teacher.fourthyear2ndSem, {
    nullable: true,
  })
  teacher: TeacherDto;

  @ApiProperty({ required: false, type: () => Fourthyear2ndsemDto })
  @ManyToOne(() => RoomDto, (room) => room.fourthyear2ndSem, {
    nullable: true,
  })
  room: RoomDto;
}
