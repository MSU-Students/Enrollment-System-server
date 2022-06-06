import { Reportandreports } from './../interfaces/reportandreports.interface';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { EnrollmentDto } from './enrollment.dto';
import { SectionDto } from './section.dto';
import { SubjectDto } from './subject.dto';

@Entity('reports&serult')
export class ReportandreportsDto implements Reportandreports {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  recordsID?: number;

  @ApiProperty({ required: false, type: () => SubjectDto })
  @ManyToOne(() => SubjectDto, (SubjectCode) => SubjectCode.recordsSubjectCode)
  subject: string;

  @ApiProperty({ required: false, type: () => SectionDto })
  @ManyToOne(() => SectionDto, (section) => section.recordsection)
  Section: string;
}
