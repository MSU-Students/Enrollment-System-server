import { Section } from './../interfaces/section.interface';
import { Enrollment } from './../interfaces/enrollment.interface';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SchedulingDto } from './scheduling.dto';
import { AdmissionDto } from './admission.dto';
import { ReportandreportsDto } from './reportandreports.dto';

@Entity('Enrollment')
export class EnrollmentDto implements Enrollment {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  enrollmentID?: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @ManyToOne(
    () => SchedulingDto,
    (SubjectCode) => SubjectCode.enrollmentSubjectCode,
  )
  subjectCode: string;

  @ApiProperty({ required: false, type: () => AdmissionDto })
  @ManyToOne(
    () => AdmissionDto,
    (studentFullName) => studentFullName.enrollmentStudentFullName,
  )
  studentFullName: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @ManyToOne(
    () => SchedulingDto,
    (academicYear) => academicYear.enrollmentacademicYear,
  )
  academicYear: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @ManyToOne(() => SchedulingDto, (yearLevel) => yearLevel.enrollmentyearLevel)
  yearLevel: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @ManyToOne(() => SchedulingDto, (semester) => semester.enrollmentsemester)
  semester: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @ManyToOne(() => SchedulingDto, (course) => course.enrollmentcourse)
  course: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @ManyToOne(() => SchedulingDto, (section) => section.enrollmentsection)
  section: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @ManyToOne(() => SchedulingDto, (teacher) => teacher.enrollmentTeacher)
  teacher: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @ManyToOne(
    () => SchedulingDto,
    (descriptiveTitle) => descriptiveTitle.enrollmentDescriptiveTitle,
  )
  descriptiveTitle: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @ManyToOne(() => SchedulingDto, (units) => units.enrollmentUnits)
  units: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @ManyToOne(() => SchedulingDto, (day) => day.enrollmentDay)
  day: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @ManyToOne(() => SchedulingDto, (day2) => day2.enrollmentDay2)
  day2: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @ManyToOne(() => SchedulingDto, (time) => time.enrollmentTime)
  time: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @ManyToOne(() => SchedulingDto, (time2) => time2.enrollmentTime2)
  time2: string;

  @ApiProperty({ required: false, type: () => ReportandreportsDto })
  @OneToMany(() => ReportandreportsDto, (Section) => Section.Section)
  recordsection: ReportandreportsDto;
}
