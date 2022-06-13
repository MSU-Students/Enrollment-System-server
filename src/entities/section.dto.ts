import { Section } from './../interfaces/section.interface';
import { EnrollmentDto } from './enrollment.dto';
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
import { TeacherDto } from './teacher.dto';

@Entity('Section')
export class SectionDto implements Section {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  sectionID?: number;

  @ApiProperty({ example: '' })
  @Column()
  YearLevel: string;

  @ApiProperty({ example: 'Aa' })
  @Column()
  sectionName: string;

  @ApiProperty({})
  @Column()
  time1: string;

  @ApiProperty({})
  @Column()
  time2: string;

  @ApiProperty({})
  @Column()
  day1: string;

  @ApiProperty({})
  @Column()
  day2: string;

  // @ApiProperty({ required: false, type: () => TeacherDto })
  // @ManyToOne(() => TeacherDto, (Teacher) => Teacher.sectionTeacher)
  // sectionTeachers: TeacherDto;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @OneToMany(() => SectionDto, (Scheduling) => Scheduling.sectionName)
  Offeredsection: SchedulingDto[];

  // @ApiProperty({ required: false, type: () => TeacherDto })
  // @OneToMany(() => SchedulingDto, (Teacher) => Teacher.Teachers)
  // schedulingTeacher: SchedulingDto;

  // @ApiProperty({ required: false, type: () => EnrollmentDto })
  // @OneToOne(() => EnrollmentDto, (Section) => Section.section)
  // enrollmentsection: EnrollmentDto;
}
