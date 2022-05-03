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
  constructor(private teacherService: TeacherService) {}

  @ApiBody({ type: TeacherDto })
  @ApiOperation({
    summary: 'Add new Teachers',
    operationId: 'AddTeachers',
  })
  @ApiResponse({ status: 200, type: TeacherDto })
  @Post()
  async create(@Body() job: TeacherDto): Promise<TeacherDto> {
    return this.teacherService.create(job);
  }

  @ApiOperation({ summary: 'Get all Teachers', operationId: 'GetTeachers' })
  @ApiResponse({ status: 200, type: TeacherDto })
  @Get()
  async findAll(): Promise<TeacherDto[]> {
    return this.teacherService.findAll();
  }

  @ApiOperation({ summary: 'Get Teachers by id', operationId: 'GetTeacher' })
  @ApiResponse({ status: 200, type: TeacherDto })
  @Get(':teacherID')
  async findOne(@Param('teacherID') id: number): Promise<TeacherDto> {
    return this.teacherService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Teachers by id',
    operationId: 'UpdateTeachers',
  })
  @ApiResponse({ status: 200, type: TeacherDto })
  @Put(':teacherID')
  async update(@Param('teacherID') id: number, @Body() job: TeacherDto) {
    return this.teacherService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Teachers by id',
    operationId: 'DeleteTeacher',
  })
  @ApiResponse({ status: 200, type: TeacherDto })
  @Delete(':teacherID')
  async delete(@Param('teacherID') id: number) {
    return this.teacherService.deleteOne(id);
  }
}
