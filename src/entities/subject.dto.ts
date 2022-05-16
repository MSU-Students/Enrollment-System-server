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
import { Secondyear1stsemDto } from './secondyear1stsem.dto';
import { Secondyear2ndsemDto } from './secondyear2ndsem.dto';
import { Thirdyear2ndsemDto } from './thirdyear2ndsem.dto';
import { Fourthyear1stsemDto } from './fourthyear1stsem.dto';
import { Fourthyear2ndsemDto } from './fourthyear2ndsem.dto';
import { Thirdyear1stsemDto } from './thirdyear1stsem.dto';

@Entity('Subject')
export class SubjectDto implements Subject {
  @PrimaryGeneratedColumn()
  subjectID?: string;

  @ApiProperty({ example: '2021-2022 1st Semester' })
  @Column()
  AYCode: string;

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

  @OneToMany(
    () => Secondyear1stsemDto,
    (secondyear1stsem) => secondyear1stsem.DescriptiveTitle,
  )
  secondYear1stSem: Secondyear1stsemDto[];
  secondYear1stSemschedule: Secondyear1stsemDto[];
  secondYear1stSemunits: Secondyear1stsemDto[];
  secondYear1stSemDescription: Secondyear1stsemDto[];
  @OneToMany(
    () => Secondyear1stsemDto,
    (secondyear2ndsem) => secondyear2ndsem.DescriptiveTitle,
  )
  secondyear2ndSemschedule: Secondyear2ndsemDto[];
  secondyear2ndSem: Secondyear2ndsemDto[];
  secondyear2ndSemunits: Secondyear2ndsemDto[];
  secondyear2ndSemDescription: Secondyear2ndsemDto[];

  @OneToMany(
    () => Thirdyear1stsemDto,
    (thirdyear1stsem) => thirdyear1stsem.DescriptiveTitle,
  )
  thirdyear1stSemDescription: Thirdyear2ndsemDto[];
  thirdyear1stSemunits: Thirdyear2ndsemDto[];
  thirdyear1stSemschedule: Thirdyear2ndsemDto[];
  thirdyear1stSem: Thirdyear2ndsemDto[];

  @OneToMany(
    () => Thirdyear1stsemDto,
    (thirdyear2ndsem) => thirdyear2ndsem.DescriptiveTitle,
  )
  thirdyear2ndSemDescription: Thirdyear2ndsemDto[];
  thirdyear2ndSemunits: Thirdyear2ndsemDto[];
  thirdyear2ndSemschedule: Thirdyear2ndsemDto[];
  thirdyear2ndSem: Thirdyear2ndsemDto[];

  @OneToMany(
    () => Fourthyear1stsemDto,
    (fourthyear1stsem) => fourthyear1stsem.DescriptiveTitle,
  )
  fourthyear1stSemDescription: Fourthyear1stsemDto[];
  fourthyear1stSemschedule: Fourthyear1stsemDto[];
  fourthyear1stSemunits: Fourthyear1stsemDto[];
  fourthyear1stSem: Fourthyear1stsemDto[];

  @OneToMany(
    () => Fourthyear1stsemDto,
    (fourthyear2ndsem) => fourthyear2ndsem.DescriptiveTitle,
  )
  fourthyear2ndSemDescription: Fourthyear2ndsemDto[];
  fourthyear2ndSemunits: Fourthyear2ndsemDto[];
  fourthyear2ndSemschedule: Fourthyear2ndsemDto[];
  fourthyear2ndSem: Fourthyear2ndsemDto[];
}
