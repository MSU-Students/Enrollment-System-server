import { CourseDto } from 'src/entities/course.dto';
import { EnrollmentDto } from './enrollment.dto';
import { Subject } from './../interfaces/subject.interface';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SchedulingDto } from './scheduling.dto';

@Entity('Subject')
export class SubjectDto implements Subject {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  subjectID?: string;

  @ApiProperty({ example: 'GEC 101' })
  @Column()
  SubjectCode: string;

  @ApiProperty({ example: 'PROGRAMMING 1' })
  @Column()
  DescriptiveTitle: string;

  @ApiProperty({ example: '3' })
  @Column()
  Units: string;

  @ApiProperty({ required: false, type: () => CourseDto })
  @ManyToOne(() => CourseDto, (Course) => Course.subjectCourse)
  course: CourseDto;

  @OneToMany(() => SchedulingDto, (Scheduling) => Scheduling.SubjectCode)
  Offered_SubjectCode: SchedulingDto[];

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToOne(() => EnrollmentDto, (Subject) => Subject.subjectCode)
  enrollmentSubjectCode: EnrollmentDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToOne(() => EnrollmentDto, (Subject) => Subject.descriptiveTitle)
  enrollmentDescriptiveTitle: EnrollmentDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToOne(() => EnrollmentDto, (Subject) => Subject.units)
  enrollmentUnits: EnrollmentDto;
}
