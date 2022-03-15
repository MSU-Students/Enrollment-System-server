import { ApiProperty } from '@nestjs/swagger';
import { User } from '../interfaces/user.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserDto implements User {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ default: 'Basam' })
  @Column({ length: 100 })
  FName: string;

  @ApiProperty({ default: 'Cosain', required: false })
  @Column({ length: 100, nullable: true })
  MName?: string;

  @ApiProperty({ default: 'Serad' })
  @Column({ length: 100 })
  LName: string;

  @ApiProperty({ default: '+639067342939', required: false })
  @Column({ length: 100, nullable: true })
  contact?: string;

  @ApiProperty({ default: 'default@gmail.com', required: false })
  @Column({ length: 100, nullable: true })
  email?: string;

  @ApiProperty({ default: 'admin' })
  @Column({ length: 100 })
  userType?: 'admin' | 'chairperson' | 'registrar';

  @ApiProperty({ default: 'user' })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ default: 'password' })
  @Column({ length: 100 })
  password: string;

  @ApiProperty({ required: false })
  @Column({ length: 255, default: '' })
  refreshToken?: string;
}
