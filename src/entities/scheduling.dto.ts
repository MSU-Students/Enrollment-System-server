import { RoomDto } from './room.dto';
import { TeacherDto } from './teacher.dto';
import { SectionDto } from 'src/entities/section.dto';
import { CourseDto } from './course.dto';
import { Scheduling } from './../interfaces/scheduling.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { SubjectDto } from './subject.dto';

@Entity('Scheduling')
export class SchedulingDto implements Scheduling {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  scheduleID?: string;

  @ApiProperty({ example: '' })
  @Column()
  yearLevel: string;

  @ApiProperty({ example: '' })
  @Column()
  AcademicYear: string;

  @ApiProperty({ example: '' })
  @Column()
  Semester: string;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(() => SubjectDto, (SubjectCode) => SubjectCode.Offered_SubjectCode)
  SubjectCode: SubjectDto;

  @ApiProperty({ required: false, type: () => CourseDto })
  @ManyToOne(() => CourseDto, (course) => course.Offered_Course)
  Courses: CourseDto;

  @ApiProperty({ required: false, type: () => SectionDto })
  @ManyToOne(() => SectionDto, (Section) => Section.Offeredsection)
  sections: SectionDto;

  @ApiProperty({ required: false, type: () => TeacherDto })
  @ManyToOne(() => TeacherDto, (FullName) => FullName.Offered_Teacher)
  Teachers: TeacherDto;

  @ApiProperty({ required: false, type: () => RoomDto })
  @ManyToOne(() => RoomDto, (room) => room.Offered_Room)
  room: RoomDto;

  // @ApiProperty({ required: false, type: () => EnrollmentDto })
  // @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.day)
  // enrollmentDay: EnrollmentDto;

  // @ApiProperty({ required: false, type: () => EnrollmentDto })
  // @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.time)
  // enrollmentTime: EnrollmentDto;

  // @ApiProperty({ required: false, type: () => EnrollmentDto })
  // @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.time2)
  // enrollmentTime2: EnrollmentDto;

  // @ApiProperty({ required: false, type: () => EnrollmentDto })
  // @OneToMany(() => EnrollmentDto, (Enrollment) => Enrollment.day2)
  // enrollmentDay2: EnrollmentDto;

  // @OneToMany(() => EnrollmentDto, (yearLevel) => yearLevel.yearLevel)
  // enrollmentyearLevel: any;

  // @OneToMany(() => EnrollmentDto, (semester) => semester.semester)
  // enrollmentsemester: any;
}
