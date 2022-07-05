import { StudentRecordDto } from 'src/entities/student-record.dto';
import { Reportandreports } from './../interfaces/reportandreports.interface';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('reports')
export class ReportandreportsDto implements Reportandreports {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  recordsID?: number;

  @ApiProperty({ required: false })
  @Column()
  Section: string;

  @ApiProperty({ required: false })
  @Column()
  subject: string;

  @ManyToMany(() => StudentRecordDto)
  @JoinTable()
  getSubject: StudentRecordDto[];
}
