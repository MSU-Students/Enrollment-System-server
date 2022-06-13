import { AdmissionDto } from 'src/entities/admission.dto';
import { CourseDto } from 'src/entities/course.dto';
import { Enrollment } from './../interfaces/enrollment.interface';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Enrollment')
export class EnrollmentDto implements Enrollment {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  enrollmentID?: string;

  @ApiProperty({ required: false, type: () => AdmissionDto })
  @ManyToOne(
    () => AdmissionDto,
    (studentIdnumber) => studentIdnumber.studentIdnumber,
  )
  studentIdnumber: string;

  @ApiProperty({})
  @Column()
  academicYear: string;

  @ApiProperty({})
  @Column()
  semester: string;

  @ApiProperty({})
  @Column()
  yearLevel: string;

  @ApiProperty({ required: false, type: () => CourseDto })
  @ManyToOne(() => CourseDto, (Course) => Course.enrollmentcourse)
  course: string;

  @ApiProperty({})
  @Column()
  subjectCode: string;

  @ApiProperty({})
  @Column()
  descriptiveTitle: string;

  @ApiProperty({})
  @Column()
  units: string;

  @ApiProperty({})
  @Column()
  fullName: string;

  @ApiProperty({})
  @Column()
  Teacher: string;

  @ApiProperty({})
  @Column()
  Section: string;

  @ApiProperty({})
  @Column()
  timeAnddate: string;
}
