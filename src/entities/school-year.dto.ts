import { EnrollmentDto } from './enrollment.dto';
import { SchedulingDto } from 'src/entities/scheduling.dto';
import { SubjectDto } from 'src/entities/subject.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('SchoolYear')
export class SchoolYearDto {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  schoolyearid?: string;

  @ApiProperty({ example: '2022-2023' })
  @Column()
  schoolyear: string;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @OneToMany(() => SchedulingDto, (SchoolYear) => SchoolYear.AcademicYear)
  schedulingSchoolYear: SchedulingDto;

  @ApiProperty({ required: false, type: () => EnrollmentDto })
  @OneToOne(() => EnrollmentDto, (SchoolYear) => SchoolYear.academicYear)
  enrollmentShoolYear: EnrollmentDto;
}
