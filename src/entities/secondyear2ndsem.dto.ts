import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Secondyear2ndsem } from 'src/interfaces/secondyear2ndsem.interface';
import { RoomDto } from './room.dto';
import { TeacherDto } from './teacher.dto';
import { SubjectDto } from './subject.dto';

@Entity('secondyear2ndsem')
export class Secondyear2ndsemDto implements Secondyear2ndsem {
  @PrimaryGeneratedColumn()
  secondyear2ndSemID?: number;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(
    () => SubjectDto,
    (description) => description.secondyear2ndSemDescription,
    {
      nullable: true,
    },
  )
  description: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(() => SubjectDto, (units) => units.secondyear2ndSemunits, {
    nullable: true,
  })
  units: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(
    () => SubjectDto,
    (schedule) => schedule.secondyear2ndSemschedule,
    {
      nullable: true,
    },
  )
  schedule: SubjectDto;

  @ApiProperty({ required: false, type: () => Secondyear2ndsemDto })
  @ManyToOne(() => SubjectDto, (subject) => subject.secondyear2ndSem, {
    nullable: true,
  })
  subject: SubjectDto;

  @ApiProperty({ required: false, type: () => Secondyear2ndsemDto })
  @ManyToOne(() => TeacherDto, (teacher) => teacher.secondyear2ndSem, {
    nullable: true,
  })
  teacher: TeacherDto;

  @ApiProperty({ required: false, type: () => Secondyear2ndsemDto })
  @ManyToOne(() => RoomDto, (room) => room.secondyear2ndSem, {
    nullable: true,
  })
  room: RoomDto;
}
