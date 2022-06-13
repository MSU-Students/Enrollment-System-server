import { SubjectDto } from 'src/entities/subject.dto';
import { Course } from './../interfaces/course.interface';
import { EnrollmentDto } from './enrollment.dto';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SchedulingDto } from './scheduling.dto';

@Entity('Course')
export class CourseDto implements Course {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  courseID?: number;

  @ApiProperty({ example: 'BS-IT' })
  @Column()
  courseCode: string;

  @ApiProperty({ example: 'Bachelor of Science in Information Technology' })
  @Column()
  courseDescription: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @OneToMany(() => SchedulingDto, (Scheduling) => Scheduling.Courses)
  Offered_Course: SchedulingDto[];

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToOne(() => EnrollmentDto, (Course) => Course.course)
  enrollmentcourse: EnrollmentDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @OneToMany(() => SubjectDto, (Course) => Course.course)
  subjectCourse: SubjectDto;
}
