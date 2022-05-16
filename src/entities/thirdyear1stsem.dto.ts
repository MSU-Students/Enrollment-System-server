import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Thirdyear1stsem } from 'src/interfaces/thirdyear1stsem.interface';
import { SubjectDto } from './subject.dto';
import { TeacherDto } from './teacher.dto';
import { RoomDto } from './room.dto';

@Entity('thirdyear1stsem')
export class Thirdyear1stsemDto implements Thirdyear1stsem {
  @PrimaryGeneratedColumn()
  thirdYear1stSemID?: number;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(
    () => SubjectDto,
    (DescriptiveTitle) => DescriptiveTitle.thirdyear1stSemDescription,
  )
  DescriptiveTitle: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(() => SubjectDto, (Units) => Units.thirdyear1stSemunits, {
    nullable: true,
  })
  units: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(() => SubjectDto, (Schedule) => Schedule.thirdyear1stSemschedule, {
    nullable: true,
  })
  Schedule: SubjectDto;

  @ApiProperty({ required: false, type: () => Thirdyear1stsemDto })
  @ManyToOne(() => SubjectDto, (subject) => subject.thirdyear1stSem, {
    nullable: true,
  })
  subject: SubjectDto;

  @ApiProperty({ required: false, type: () => Thirdyear1stsemDto })
  @ManyToOne(() => TeacherDto, (teacher) => teacher.thirdyear1stSem, {
    nullable: true,
  })
  teacher: TeacherDto;

  @ApiProperty({ required: false, type: () => Thirdyear1stsemDto })
  @ManyToOne(() => RoomDto, (room) => room.thirdyear1stSem, {
    nullable: true,
  })
  room: RoomDto;
}
