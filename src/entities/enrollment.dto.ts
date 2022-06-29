import { StudentRecordDto } from './student-record.dto';
import { AdmissionDto } from 'src/entities/admission.dto';
import { CourseDto } from 'src/entities/course.dto';
import { Enrollment } from './../interfaces/enrollment.interface';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Enrollment')
export class EnrollmentDto implements Enrollment {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  enrollmentID?: number;

  @ApiProperty({ example: 'Regular' })
  @Column()
  enteredsubjectCode: string;

  @ApiProperty({ example: 'Regular' })
  @Column()
  enteredsection: string;

  @ApiProperty({ example: 'Regular' })
  @Column()
  entereddescriptiveTitle: string;

  @ApiProperty({ example: 'Regular' })
  @Column()
  enteredtime: string;

  @ApiProperty({ example: 'Regular' })
  @Column()
  entereddate: string;

  @ApiProperty({ example: 'Regular' })
  @Column()
  enteredunits: string;

  @ApiProperty({ example: 'Regular' })
  @Column()
  enteredteacher: string;

  @ApiProperty({ required: false, type: () => CourseDto })
  @ManyToOne(() => CourseDto, (Course) => Course.course)
  Courses: CourseDto;

  @ManyToMany(() => AdmissionDto)
  @JoinTable()
  admission: AdmissionDto[];

  @ApiProperty({ required: false, type: () => StudentRecordDto })
  @ManyToOne(() => StudentRecordDto, (cor) => cor.enrolledSub, {})
  cor: StudentRecordDto;
}
