import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TeacherDto } from 'src/entities/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(private UserService: TeacherService) {}

  @ApiBody({ type: TeacherDto })
  @ApiOperation({
    summary: 'Add new Users',
    operationId: 'AddUsers',
  })
  @ApiResponse({ status: 200, type: TeacherDto })
  @Post()
  async create(@Body() job: TeacherDto): Promise<TeacherDto> {
    return this.UserService.create(job);
  }

  @ApiOperation({ summary: 'Get all Users', operationId: 'GetUserss' })
  @ApiResponse({ status: 200, type: TeacherDto })
  @Get()
  async findAll(): Promise<TeacherDto[]> {
    return this.UserService.findAll();
  }

  @ApiOperation({ summary: 'Get Users by id', operationId: 'GetUsers' })
  @ApiResponse({ status: 200, type: TeacherDto })
  @Get(':userID')
  async findOne(@Param('userID') id: number): Promise<TeacherDto> {
    return this.UserService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Users by id',
    operationId: 'UpdateUsers',
  })
  @ApiResponse({ status: 200, type: TeacherDto })
  @Put(':userID')
  async update(@Param('userID') id: number, @Body() job: TeacherDto) {
    return this.UserService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Users by id',
    operationId: 'DeleteUsers',
  })
  @ApiResponse({ status: 200, type: TeacherDto })
  @Delete(':userID')
  async delete(@Param('userID') id: number) {
    return this.UserService.deleteOne(id);
  }
}
