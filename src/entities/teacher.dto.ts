import { SectionDto } from 'src/entities/section.dto';
import { Section } from './../interfaces/section.interface';
import { SchedulingDto } from 'src/entities/scheduling.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Teacher } from './../interfaces/teacher.interface';
import { Firstyear1stsemDto } from './firstyear1stsem.dto';
import { Firstyear2ndsemDto } from './firstyear2ndsem.dto';

@Entity('Manage_Teacher')
export class TeacherDto implements Teacher {
  @PrimaryGeneratedColumn()
  teacherID?: string;

  @ApiProperty({ example: 'Margarit C. Malaca' })
  @Column()
  FullName: string;

  @ApiProperty({ example: 'Bachelor' })
  @Column()
  Degree: string;

  @ApiProperty({ example: 'Programming' })
  @Column()
  Specialization: string;

  @OneToMany(
    () => Firstyear1stsemDto,
    (firstYear1stSem) => firstYear1stSem.teacher,
  )
  firstYear1stSem: Firstyear1stsemDto[];
  firstYear2ndSem: Firstyear2ndsemDto[];

  @OneToMany(() => TeacherDto, (Scheduling) => Scheduling.FullName)
  schedulingTeacher: SchedulingDto[];

  @OneToMany(() => TeacherDto, (Section) => Section.FullName)
  sectionTeacher: SectionDto[];
}
