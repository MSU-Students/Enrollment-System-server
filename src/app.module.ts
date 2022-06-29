import { StudentRecordDto } from 'src/entities/student-record.dto';
import { RoomDto } from 'src/entities/room.dto';
import { SectionDto } from './entities/section.dto';
import { AdmissionDto } from 'src/entities/admission.dto';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherService } from './teacher/teacher.service';
import { TeacherDto } from './entities/teacher.dto';
import { SubjectController } from './subject/subject.controller';
import { SubjectService } from './subject/subject.service';
import { SubjectDto } from './entities/subject.dto';
import { AuthModule } from './user/auth.module';
import { UserDto } from './user';
import { AdmissionController } from './admission/admission.controller';
import { AdmissionService } from './admission/admission.service';
import { CalcellationController } from './calcellation/calcellation.controller';
import { CalcellationService } from './calcellation/calcellation.service';
import { SectionController } from './section/section.controller';
import { SectionService } from './section/section.service';
import { SchedulingController } from './scheduling/scheduling.controller';
import { SchedulingService } from './scheduling/scheduling.service';
import { ReportandreportsController } from './reportandreports/reportandreports.controller';
import { ReportandreportsService } from './reportandreports/reportandreports.service';
import { CourseController } from './course/course.controller';
import { CourseService } from './course/course.service';
import { CourseDto } from './entities/course.dto';
import { SchedulingDto } from './entities/scheduling.dto';
import { EnrollmentController } from './enrollment/enrollment.controller';
import { EnrollmentService } from './enrollment/enrollment.service';
import { EnrollmentDto } from './entities/enrollment.dto';
import { ReportandreportsDto } from './entities/reportandreports.dto';
import { RoomController } from './room/room.controller';
import { RoomService } from './room/room.service';
import { StudentRecordController } from './student-record/student-record.controller';
import { StudentRecordService } from './student-record/student-record.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      TeacherDto,
      SubjectDto,
      UserDto,
      AdmissionDto,
      CourseDto,
      SectionDto,
      SchedulingDto,
      EnrollmentDto,
      ReportandreportsDto,
      RoomDto,
      StudentRecordDto,
    ]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'enrollmentDB',
      entities: [
        TeacherDto,
        SubjectDto,
        UserDto,
        AdmissionDto,
        CourseDto,
        SectionDto,
        SchedulingDto,
        EnrollmentDto,
        ReportandreportsDto,
        RoomDto,
        StudentRecordDto,
      ],
      // synchronize: true,
      // dropSchema: true,
    }),
    AuthModule,
  ],
  controllers: [
    UserController,
    TeacherController,
    SubjectController,
    AdmissionController,
    CalcellationController,
    SectionController,
    SchedulingController,
    ReportandreportsController,
    CourseController,
    EnrollmentController,
    RoomController,
    StudentRecordController,
  ],
  providers: [
    UserService,
    TeacherService,
    SubjectService,
    AdmissionService,
    CalcellationService,
    SectionService,
    SchedulingService,
    ReportandreportsService,
    CourseService,
    EnrollmentService,
    RoomService,
    StudentRecordService,
  ],
})
export class AppModule {}
