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
import { CourseDto } from 'src/entities/course.dto';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @ApiBody({ type: CourseDto })
  @ApiOperation({
    summary: 'Add new Courses',
    operationId: 'AddCourses',
  })
  @ApiResponse({ status: 200, type: CourseDto })
  @Post()
  async create(@Body() job: CourseDto): Promise<CourseDto> {
    return this.courseService.create(job);
  }

  @ApiOperation({ summary: 'Get all Courses', operationId: 'GetCourses' })
  @ApiResponse({ status: 200, type: CourseDto })
  @Get()
  async findAll(): Promise<CourseDto[]> {
    return this.courseService.findAll();
  }

  @ApiOperation({ summary: 'Get Courses by id', operationId: 'GetCourseById' })
  @ApiResponse({ status: 200, type: CourseDto })
  @Get(':courseID')
  async findOne(@Param('courseID') id: number): Promise<CourseDto> {
    return this.courseService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Courses by id',
    operationId: 'Updatecourse',
  })
  @ApiResponse({ status: 200, type: CourseDto })
  @Put(':courseID')
  async update(@Param('courseID') id: number, @Body() job: CourseDto) {
    return this.courseService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Courses by id',
    operationId: 'DeleteCourse',
  })
  @ApiResponse({ status: 200, type: CourseDto })
  @Delete(':courseID')
  async delete(@Param('courseID') id: number) {
    return this.courseService.deleteOne(id);
  }
}
