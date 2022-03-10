import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDto } from './entities/user.dto';
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

@Module({
  imports: [
    TypeOrmModule.forFeature([UserDto, TeacherDto, RoomDto, SubjectDto]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'enrollmentDB',
      entities: [UserDto, TeacherDto, RoomDto, SubjectDto],
      synchronize: true,
      dropSchema: true,
    }),
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
