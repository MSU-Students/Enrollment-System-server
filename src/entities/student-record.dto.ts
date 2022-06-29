import { EnrollmentDto } from 'src/entities/enrollment.dto';
import { StudentRecord } from './../interfaces/student-record.interface';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { AdmissionDto } from './admission.dto';

@Entity('studentRecord')
export class StudentRecordDto implements StudentRecord {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  StudentRecordID: number;

  @ApiProperty({ required: false, type: () => AdmissionDto })
  @ManyToOne(
    () => AdmissionDto,
    (studentIdnumber) => studentIdnumber.studentIdnumber,
  )
  Idnumber: AdmissionDto;

  // @ApiProperty({ required: false, type: () => AdmissionDto })
  // @ManyToOne(() => AdmissionDto, (fullName) => fullName.studentFullName)
  // fullName: AdmissionDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToMany(() => EnrollmentDto, (enrollment) => enrollment.cor, {
    nullable: true,
  })
  enrolledSub: EnrollmentDto[];
}
