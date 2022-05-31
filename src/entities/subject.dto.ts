import { Scheduling } from './../interfaces/scheduling.interface';
import { Firstyear1stsem } from './../interfaces/firstyear1stsem.interface';
import { Subject } from './../interfaces/subject.interface';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Firstyear1stsemDto } from './firstyear1stsem.dto';
import { Firstyear2ndsemDto } from './firstyear2ndsem.dto';
import { SchedulingDto } from './scheduling.dto';
import { scheduled } from 'rxjs';

@Entity('Subject')
export class SubjectDto implements Subject {
  @PrimaryGeneratedColumn()
  subjectID?: string;

  @ApiProperty({ example: 'First Year' })
  @Column()
  YearLevel: string;

  @ApiProperty({ example: 'GEC 101' })
  @Column()
  SubjectCode: string;

  @ApiProperty({ example: 'PROGRAMMING 1' })
  @Column()
  DescriptiveTitle: string;

  @ApiProperty({ example: 'None' })
  @Column()
  Prerequisite: string;

  @ApiProperty({ example: '3' })
  @Column()
  Units: string;

  @ApiProperty({ example: 'Monday' })
  @Column()
  Day: string;

  @ApiProperty({ example: 'Wednesday' })
  @Column()
  Day2: string;

  @ApiProperty({ example: '08:00' })
  @Column()
  Time: string;

  @ApiProperty({ example: '10:00' })
  @Column()
  Time2: string;

  @ApiProperty({ example: '2021-2022 1st Semester' })
  @Column()
  AYCode: string;

  @OneToMany(
    () => Firstyear1stsemDto,
    (firstYear1stSem) => firstYear1stSem.subject,
  )
  firstYear1stSem: Firstyear1stsemDto[];

  @OneToMany(
    () => Firstyear1stsemDto,
    (firstYear1stSem) => firstYear1stSem.DescriptiveTitle,
  )
  firstYear1stSemDescription: Firstyear1stsemDto[];
  Firstyear1stsemSubjectCode: Firstyear1stsemDto[];
  firstYear1stSemunits: Firstyear1stsemDto[];
  firstYear1stSemschedule: Firstyear1stsemDto[];

  @OneToMany(
    () => Firstyear1stsemDto,
    (firstYear2ndSem) => firstYear2ndSem.DescriptiveTitle,
  )
  firstYear2ndSemDescription: Firstyear2ndsemDto[];
  firstYear2ndSemunits: Firstyear2ndsemDto[];
  firstYear2ndSemschedule: Firstyear2ndsemDto[];
  firstYear2ndSem: Firstyear2ndsemDto[];

  @OneToMany(() => SchedulingDto, (Scheduling) => Scheduling.SubjectCode)
  schedulingSubjectCode: SchedulingDto[];

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @OneToMany(() => SchedulingDto, (Scheduling) => Scheduling.DescriptiveTitle)
  schedulingDescriptiveTitle: SchedulingDto[];
}
