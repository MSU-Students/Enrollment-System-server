import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SchoolYear')
export class SchoolYearDto {
  @PrimaryGeneratedColumn()
  schoolyearid?: string;

  @ApiProperty({ example: '2022-2023' })
  @Column()
  schoolyear: string;
}
