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

@Module({
  imports: [
    TypeOrmModule.forFeature([TeacherDto, RoomDto, SubjectDto, UserDto]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'enrollmentDB',
      entities: [TeacherDto, RoomDto, SubjectDto, UserDto],
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
  ],
  providers: [UserService, TeacherService, RoomService, SubjectService],
})
export class AppModule {}
