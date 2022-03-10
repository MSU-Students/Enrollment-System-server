import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDto } from './entities/user.dto';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserDto]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'enrollmentDB',
      entities: [UserDto],
      synchronize: true,
      dropSchema: true,
    }),
    
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
