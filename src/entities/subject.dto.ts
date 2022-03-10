import { Subject } from './../interfaces/subject.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Subject')
export class SubjectDto implements Subject {
  @PrimaryGeneratedColumn()
  subjectID?: string;

  @ApiProperty({ example: '2021-2022 1st Semester' })
  @Column()
  AYCode: string;

  @ApiProperty({ example: 'First Year' })
  @Column()
  YearLevel: string;

  @ApiProperty({ example: 'GEC 101' })
  @Column()
  SubjectCode: string;

  @ApiProperty({ example: 'PROGRAMMING 1' })
  @Column()
  DescriptiveTitle: string;

  @ApiProperty({ example: 'None' })
  @Column()
  Prerequisite: string;

  @ApiProperty({ example: '3' })
  @Column()
  Units: string;
}
