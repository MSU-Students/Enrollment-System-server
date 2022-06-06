import { TeacherDto } from './teacher.dto';
import { SectionDto } from 'src/entities/section.dto';
import { CourseDto } from './course.dto';
import { Scheduling } from './../interfaces/scheduling.interface';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { SubjectDto } from './subject.dto';
import { EnrollmentDto } from './enrollment.dto';
import { SchoolYearDto } from './school-year.dto';

@Entity('Scheduling')
export class SchedulingDto implements Scheduling {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  scheduleID?: string;

  @ApiProperty({ example: '' })
  @Column()
  yearLevel: string;

  @ApiProperty({ required: false, type: () => SchoolYearDto })
  @ManyToOne(
    () => SchoolYearDto,
    (SchoolYear) => SchoolYear.schedulingSchoolYear,
  )
  AcademicYear: SchoolYearDto;

  @ApiProperty({ example: '' })
  @Column()
  Semester: string;

  @ApiProperty({ example: '' })
  @Column()
  Day: string;

  @ApiProperty({ example: '' })
  @Column()
  Day2: string;

  @ApiProperty({ example: '' })
  @Column()
  Time: string;

  @ApiProperty({ example: '' })
  @Column()
  Time2: string;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(
    () => SubjectDto,
    (SubjectCode) => SubjectCode.schedulingSubjectCode,
  )
  SubjectCodes: SubjectDto;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(
    () => SubjectDto,
    (DescriptiveTitle) => DescriptiveTitle.schedulingDescriptiveTitle,
  )
  DescriptiveTitle: SubjectDto;

  @ApiProperty({ required: false, type: () => CourseDto })
  @ManyToOne(() => CourseDto, (course) => course.schedulingCourse)
  Courses: CourseDto;

  @ApiProperty({ required: false, type: () => SectionDto })
  @ManyToOne(() => SectionDto, (Section) => Section.schedulingSection)
  Section: string;

  @ApiProperty({ required: false, type: () => TeacherDto })
  @ManyToOne(() => TeacherDto, (FullName) => FullName.schedulingTeacher)
  Teachers: TeacherDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.subjectCode)
  enrollmentSubjectCode: EnrollmentDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.academicYear)
  enrollmentacademicYear: EnrollmentDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.yearLevel)
  enrollmentyearLevel: EnrollmentDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.course)
  enrollmentcourse: EnrollmentDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.semester)
  enrollmentsemester: EnrollmentDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.section)
  enrollmentsection: EnrollmentDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.teacher)
  enrollmentTeacher: EnrollmentDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.descriptiveTitle)
  enrollmentDescriptiveTitle: EnrollmentDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.units)
  enrollmentUnits: EnrollmentDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.day)
  enrollmentDay: EnrollmentDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.time)
  enrollmentTime: EnrollmentDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.time2)
  enrollmentTime2: EnrollmentDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.day2)
  enrollmentDay2: EnrollmentDto;
}
