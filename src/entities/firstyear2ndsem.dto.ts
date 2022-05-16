import { ApiProperty } from '@nestjs/swagger';
import { Firstyear2ndsem } from 'src/interfaces/firstyear2ndsem.interface';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoomDto } from './room.dto';
import { SubjectDto } from './subject.dto';
import { TeacherDto } from './teacher.dto';

@Entity('firstyear2ndsem')
export class Firstyear2ndsemDto implements Firstyear2ndsem {
  @PrimaryGeneratedColumn()
  firstyear2ndSemID?: number;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(
    () => SubjectDto,
    (DescriptiveTitle) => DescriptiveTitle.firstYear2ndSemDescription,
    {
      nullable: true,
    },
  )
  DescriptiveTitle: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(() => SubjectDto, (Units) => Units.firstYear2ndSemunits, {
    nullable: true,
  })
  units: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(() => SubjectDto, (Schedule) => Schedule.firstYear2ndSemschedule, {
    nullable: true,
  })
  Schedule: SubjectDto;

  @ApiProperty({ required: false, type: () => Firstyear2ndsemDto })
  @ManyToOne(() => SubjectDto, (subject) => subject.firstYear2ndSem, {
    nullable: true,
  })
  subject: SubjectDto;

  @ApiProperty({ required: false, type: () => Firstyear2ndsemDto })
  @ManyToOne(() => TeacherDto, (teacher) => teacher.firstYear2ndSem, {
    nullable: true,
  })
  teacher: TeacherDto;

  @ApiProperty({ required: false, type: () => Firstyear2ndsemDto })
  @ManyToOne(() => RoomDto, (room) => room.firstYear2ndSem, {
    nullable: true,
  })
  room: RoomDto;
}
