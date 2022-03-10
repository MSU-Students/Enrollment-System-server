import { User } from './../interfaces/user.interface';

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity('UserAccount')
export class UserDto implements User {
    @PrimaryGeneratedColumn()
    id?: number;

    @ApiProperty({example:'Naeem'})
    @Column()
    fName: string;
    
    @ApiProperty({example:'Mangcol'})
    @Column()
    lName: string;

    @ApiProperty({example:'M'})
    @Column()
    mName: string;

    @ApiProperty({example:'@Naeem21'})
    @Column()
    userName: string;

    @ApiProperty({example:'nananan'})
    @Column()
    password: string;

    @ApiProperty({example:'Chairperson'})
    @Column()
    userType: 'Admin' | 'Chairperson' | 'Registrar';

}
