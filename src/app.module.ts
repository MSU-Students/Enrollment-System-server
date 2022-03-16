import { AdmissionDto } from 'src/entities/admission.dto';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherService } from './teacher/teacher.service';
import { TeacherDto } from './entities/teacher.dto';
import { RoomController } from './room/room.controller';
import { RoomService } from './room/room.service';
import { RoomDto } from './entities/room.dto';
import { SubjectController } from './subject/subject.controller';
import { SubjectService } from './subject/subject.service';
import { SubjectDto } from './entities/subject.dto';
import { AuthModule } from './user/auth.module';
import { UserDto } from './user';
import { AdmissionController } from './admission/admission.controller';
import { AdmissionService } from './admission/admission.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TeacherDto,
      RoomDto,
      SubjectDto,
      UserDto,
      AdmissionDto,
    ]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'enrollmentDB',
      entities: [TeacherDto, RoomDto, SubjectDto, UserDto, AdmissionDto],
      synchronize: true,
      dropSchema: true,
    }),
    AuthModule,
  ],
  controllers: [
    UserController,
    TeacherController,
    RoomController,
    SubjectController,
    AdmissionController,
  ],
  providers: [
    UserService,
    TeacherService,
    RoomService,
    SubjectService,
    AdmissionService,
  ],
})
export class AppModule {}
