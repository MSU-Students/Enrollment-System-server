import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Thirdyear2ndsem } from 'src/interfaces/thirdyear2ndsem.interface';
import { SubjectDto } from './subject.dto';
import { TeacherDto } from './teacher.dto';
import { RoomDto } from './room.dto';

@Entity('thirdyear2ndsem')
export class Thirdyear2ndsemDto implements Thirdyear2ndsem {
  @PrimaryGeneratedColumn()
  thirdYear2ndSemID?: number;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(
    () => SubjectDto,
    (DescriptiveTitle) => DescriptiveTitle.thirdyear2ndSemDescription,
    {
      nullable: true,
    },
  )
  DescriptiveTitle: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(() => SubjectDto, (Units) => Units.thirdyear2ndSemunits, {
    nullable: true,
  })
  units: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(() => SubjectDto, (Schedule) => Schedule.thirdyear2ndSemschedule, {
    nullable: true,
  })
  Schedule: SubjectDto;

  @ApiProperty({ required: false, type: () => Thirdyear2ndsemDto })
  @ManyToOne(() => SubjectDto, (subject) => subject.thirdyear2ndSem, {
    nullable: true,
  })
  subject: SubjectDto;

  @ApiProperty({ required: false, type: () => Thirdyear2ndsemDto })
  @ManyToOne(() => TeacherDto, (teacher) => teacher.thirdyear2ndSem, {
    nullable: true,
  })
  teacher: TeacherDto;

  @ApiProperty({ required: false, type: () => Thirdyear2ndsemDto })
  @ManyToOne(() => RoomDto, (room) => room.thirdyear2ndSem, {
    nullable: true,
  })
  room: RoomDto;
}
