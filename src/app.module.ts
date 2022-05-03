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
import { Secondyear1stsemController } from './secondyear1stsem/secondyear1stsem.controller';
import { Secondyear1stsemService } from './secondyear1stsem/secondyear1stsem.service';
import { Secondyear2ndsemController } from './secondyear2ndsem/secondyear2ndsem.controller';
import { Secondyear2ndsemService } from './secondyear2ndsem/secondyear2ndsem.service';
import { Secondyear1stsemDto } from './entities/secondyear1stsem.dto';
import { Secondyear2ndsemDto } from './entities/secondyear2ndsem.dto';
import { Thirdyear1stsemController } from './thirdyear1stsem/thirdyear1stsem.controller';
import { Thirdyear1stsemService } from './thirdyear1stsem/thirdyear1stsem.service';
import { Thirdyear2ndsemController } from './thirdyear2ndsem/thirdyear2ndsem.controller';
import { Thirdyear2ndsemService } from './thirdyear2ndsem/thirdyear2ndsem.service';
import { Thirdyear1stsemDto } from './entities/thirdyear1stsem.dto';
import { Thirdyear2ndsemDto } from './entities/thirdyear2ndsem.dto';
import { Fourthyear1stsemController } from './fourthyear1stsem/fourthyear1stsem.controller';
import { Fourthyear1stsemService } from './fourthyear1stsem/fourthyear1stsem.service';
import { Fourthyear2ndsemController } from './fourthyear2ndsem/fourthyear2ndsem.controller';
import { Fourthyear2ndsemService } from './fourthyear2ndsem/fourthyear2ndsem.service';
import { Fourthyear1stsemDto } from './entities/fourthyear1stsem.dto';
import { Fourthyear2ndsemDto } from './entities/fourthyear2ndsem.dto';
import { EnteringController } from './entering/entering.controller';
import { EnteringService } from './entering/entering.service';
import { CalcellationController } from './calcellation/calcellation.controller';
import { CalcellationService } from './calcellation/calcellation.service';
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
      Secondyear1stsemDto,
      Secondyear2ndsemDto,
      Thirdyear1stsemDto,
      Thirdyear2ndsemDto,
      Fourthyear1stsemDto,
      Fourthyear2ndsemDto,
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
        Secondyear1stsemDto,
        Secondyear2ndsemDto,
        Thirdyear1stsemDto,
        Thirdyear2ndsemDto,
        Fourthyear1stsemDto,
        Fourthyear2ndsemDto,
      ],
      // synchronize: true,
      // dropSchema: true,
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
    Secondyear1stsemController,
    Secondyear2ndsemController,
    Thirdyear1stsemController,
    Thirdyear2ndsemController,
    Fourthyear1stsemController,
    Fourthyear2ndsemController,
    EnteringController,
    CalcellationController,
  ],
  providers: [
    UserService,
    TeacherService,
    RoomService,
    SubjectService,
    AdmissionService,
    Firstyear1stsemService,
    Firstyear2ndsemService,
    Secondyear1stsemService,
    Secondyear2ndsemService,
    Thirdyear1stsemService,
    Thirdyear2ndsemService,
    Fourthyear1stsemService,
    Fourthyear2ndsemService,
    EnteringService,
    CalcellationService,
  ],
})
export class AppModule {}
