import { SchedulingDto } from 'src/entities/scheduling.dto';
import { SubjectDto } from 'src/entities/subject.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SchoolYear')
export class SchoolYearDto {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  schoolyearid?: string;

  @ApiProperty({ example: '2022-2023' })
  @Column()
  schoolyear: string;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @OneToMany(() => SubjectDto, (SchoolYear) => SchoolYear.YearLevel)
  subjectSchoolYear: SubjectDto;

  @ApiProperty({ required: false, type: () => SchedulingDto })
  @OneToMany(() => SchedulingDto, (SchoolYear) => SchoolYear.AcademicYear)
  schedulingSchoolYear: SchedulingDto;
}
