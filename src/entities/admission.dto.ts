import { Admission } from './../interfaces/admission.interface';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { CourseDto } from './course.dto';
import { StudentRecordDto } from './student-record.dto';

@Entity('Admission')
export class AdmissionDto implements Admission {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  admissionID?: number;

  @ApiProperty({ example: '' })
  @Column()
  reportCard: boolean;

  @ApiProperty({ example: '' })
  @Column()
  bCertificate: boolean;

  @ApiProperty({ example: '' })
  @Column()
  Pic: boolean;

  @ApiProperty({ example: '' })
  @Column()
  eForm: boolean;

  @ApiProperty({ example: '201810757' })
  @Column()
  IdNum: string;

  @ApiProperty({ example: '123456789' })
  @Column()
  lrn: string;

  @ApiProperty({ example: 'First Semester' })
  @Column()
  ayCode: string;

  @ApiProperty({ example: 'First Year' })
  @Column()
  incomingYlevel: string;

  @ApiProperty({ example: 'New Student' })
  @Column()
  studentType: string;

  @ApiProperty({ example: 'Naeem' })
  @Column()
  FName: string;

  @ApiProperty({ example: 'Mamangcao' })
  @Column()
  MName: string;

  @ApiProperty({ example: 'Mangcol' })
  @Column()
  LName: string;

  @ApiProperty({ example: '21' })
  @Column()
  age: string;

  @ApiProperty({ example: '1999/06/10' })
  @Column()
  dataOfBirth: string;

  @ApiProperty({ example: 'Manila Pasay City' })
  @Column()
  placeOfBirth: string;

  @ApiProperty({ example: '09639539072' })
  @Column()
  contactNo: string;

  @ApiProperty({ example: 'Male' })
  @Column()
  gender: string;

  @ApiProperty({ example: 'Single' })
  @Column()
  martialStatus: string;

  @ApiProperty({ example: 'Pilipino' })
  @Column()
  citizenship: string;

  @ApiProperty({ example: 'Islam' })
  @Column()
  religion: string;

  @ApiProperty({ example: 'Dimalna MSU' })
  @Column()
  address: string;

  @ApiProperty({ required: false, type: () => CourseDto })
  @ManyToOne(() => CourseDto, (course) => course.Course)
  Courses: CourseDto;

  @ApiProperty({ example: 'First Semester' })
  @Column()
  semester: string;

  @ApiProperty({ required: false, type: () => StudentRecordDto })
  @OneToMany(() => StudentRecordDto, (IdNum) => IdNum.Idnumber)
  studentIdnumber: StudentRecordDto[];
}
