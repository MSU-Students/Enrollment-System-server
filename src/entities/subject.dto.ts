import { SchoolYearDto } from 'src/entities/school-year.dto';
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
import { SchedulingDto } from './scheduling.dto';

@Entity('Subject')
export class SubjectDto implements Subject {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  subjectID?: string;

  @ApiProperty({ required: false, type: () => SchoolYearDto })
  @ManyToOne(() => SchoolYearDto, (SchoolYear) => SchoolYear.subjectSchoolYear)
  AYCodes: SchoolYearDto;

  @ApiProperty({ example: 'GEC 101' })
  @Column()
  SubjectCode: string;

  @ApiProperty({ example: 'PROGRAMMING 1' })
  @Column()
  DescriptiveTitle: string;

  @ApiProperty({ example: '3' })
  @Column()
  Units: string;

  @ApiProperty({ example: '2021-2022 1st Semester' })
  @Column()
  YearLevel: string;

  @OneToMany(() => SchedulingDto, (Scheduling) => Scheduling.SubjectCodes)
  schedulingSubjectCode: SchedulingDto[];

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @OneToMany(() => SchedulingDto, (Scheduling) => Scheduling.DescriptiveTitle)
  schedulingDescriptiveTitle: SchedulingDto[];
}
