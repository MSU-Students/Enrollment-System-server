import { Section } from './../interfaces/Section.interface';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SchedulingDto } from './scheduling.dto';
import { TeacherDto } from './teacher.dto';

@Entity('Section')
export class SectionDto implements Section {
  @PrimaryGeneratedColumn()
  sectionID?: number;

  @ApiProperty({ example: '' })
  @Column()
  YearLevel: string;

  @ApiProperty({ example: 'Aa' })
  @Column()
  sectionName: string;

  @ApiProperty({ required: false, type: () => TeacherDto })
  @ManyToOne(() => TeacherDto, (Teacher) => Teacher.sectionTeacher)
  sectionTeacher: string;

  @OneToMany(() => SectionDto, (Scheduling) => Scheduling.sectionName)
  schedulingSection: SchedulingDto[];
}
