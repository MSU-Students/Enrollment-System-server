import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export interface IUser {
  id?: number;
  FName: string;
  MName?: string;
  LName: string;
  username?: string;
  password?: string;
  userType?: 'admin' | 'chairperson' | 'registrar';
  contact?: string;
  email?: string;
}

export class RegisterUserDto implements IUser {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ example: 'Basam' })
  @Column({ length: 100 })
  FName: string;

  @ApiProperty({ example: 'Cosain', required: false })
  @Column({ length: 100, nullable: true })
  MName?: string;

  @ApiProperty({ example: 'Serad' })
  @Column({ length: 100 })
  LName: string;

  @ApiProperty({ example: '+639067342939', required: false })
  @Column({ length: 100, nullable: true })
  contact?: string;

  @ApiProperty({ example: 'example@gmail.com', required: false })
  @Column({ length: 100, nullable: true })
  email?: string;

  @ApiProperty({ example: 'admin' })
  @Column({ length: 100 })
  userType?: 'admin' | 'chairperson' | 'registrar';

  @ApiProperty({ example: 'user' })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ example: 'password' })
  @Column({ length: 100 })
  password: string;
}

export class LoginUserDto implements IUser {
  id?: number;
  FName: string;
  MName?: string;
  LName: string;
  @ApiProperty()
  username?: string;
  @ApiProperty()
  password?: string;
  userType?: 'admin' | 'chairperson' | 'registrar';
  contact?: string;
  email?: string;
}

export class RefreshDto {
  @ApiProperty({
    required: true,
    minLength: 5,
  })
  refresh_token: string;
}

export class AccessTokenDto {
  @ApiProperty({
    required: false,
    minLength: 5,
  })
  accessToken?: string;
  @ApiProperty({
    required: false,
    minLength: 5,
  })
  refreshToken?: string;
}
