import { EnrollmentDto } from './enrollment.dto';
import { Scheduling } from './../interfaces/scheduling.interface';
import { SectionDto } from 'src/entities/section.dto';
import { SchedulingDto } from 'src/entities/scheduling.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Teacher } from './../interfaces/teacher.interface';

@Entity('Manage_Teacher')
export class TeacherDto implements Teacher {
  @ApiProperty({ required: false })
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

  @OneToMany(() => TeacherDto, (Scheduling) => Scheduling.FullName)
  Offered_Teacher: SchedulingDto[];

  @OneToMany(() => TeacherDto, (Section) => Section.FullName)
  sectionTeacher: SectionDto[];

  // @ApiProperty({ required: false, type: () => EnrollmentDto })
  // @OneToMany(() => EnrollmentDto, (Teacher) => Teacher.teacher)
  // enrollmentTeacher: EnrollmentDto;
}
