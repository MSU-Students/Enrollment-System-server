import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Teacher } from './../interfaces/teacher.interface';

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
}
