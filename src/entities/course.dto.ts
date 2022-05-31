import { Course } from './../interfaces/Course.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SchedulingDto } from './scheduling.dto';

@Entity('Course')
export class CourseDto implements Course {
  @PrimaryGeneratedColumn()
  courseID?: number;

  @ApiProperty({ example: 'BS-IT' })
  @Column()
  courseCode: string;

  @ApiProperty({ example: 'Bachelor of Science in Information Technology' })
  @Column()
  courseDescription: string;

  @OneToMany(() => CourseDto, (Scheduling) => Scheduling.courseCode)
  schedulingCourse: SchedulingDto[];
}
