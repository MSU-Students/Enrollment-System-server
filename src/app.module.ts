import { SectionDto } from './entities/section.dto';
import { SchoolYearDto } from './entities/school-year.dto';
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
import { Firstyear1stsemController } from './firstyear1stsem/firstyear1stsem.controller';
import { Firstyear1stsemService } from './firstyear1stsem/firstyear1stsem.service';
import { Firstyear2ndsemController } from './firstyear2ndsem/firstyear2ndsem.controller';
import { Firstyear2ndsemService } from './firstyear2ndsem/firstyear2ndsem.service';
import { Firstyear1stsemDto } from './entities/firstyear1stsem.dto';
import { Firstyear2ndsemDto } from './entities/firstyear2ndsem.dto';
import { CalcellationController } from './calcellation/calcellation.controller';
import { CalcellationService } from './calcellation/calcellation.service';
import { SchoolYearController } from './school-year/school-year.controller';
import { SchoolYearService } from './school-year/school-year.service';
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
@Module({
  imports: [
    TypeOrmModule.forFeature([
      TeacherDto,
      RoomDto,
      SubjectDto,
      UserDto,
      AdmissionDto,
      Firstyear1stsemDto,
      Firstyear2ndsemDto,
      SchoolYearDto,
      CourseDto,
      SectionDto,
      SchedulingDto,
      EnrollmentDto,
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
        RoomDto,
        SubjectDto,
        UserDto,
        AdmissionDto,
        Firstyear1stsemDto,
        Firstyear2ndsemDto,
        SchoolYearDto,
        CourseDto,
        SectionDto,
        SchedulingDto,
        EnrollmentDto,
      ],
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
    Firstyear1stsemController,
    Firstyear2ndsemController,
    CalcellationController,
    SchoolYearController,
    SectionController,
    SchedulingController,
    ReportandreportsController,
    CourseController,
    EnrollmentController,
  ],
  providers: [
    UserService,
    TeacherService,
    RoomService,
    SubjectService,
    AdmissionService,
    Firstyear1stsemService,
    Firstyear2ndsemService,
    CalcellationService,
    SchoolYearService,
    SectionService,
    SchedulingService,
    ReportandreportsService,
    CourseService,
    EnrollmentService,
  ],
})
export class AppModule {}
