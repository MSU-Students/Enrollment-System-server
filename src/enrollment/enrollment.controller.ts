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
import { EnrollmentDto } from 'src/entities/Enrollment.dto';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private enrollmentService: EnrollmentService) {}

  @ApiBody({ type: EnrollmentDto })
  @ApiOperation({
    summary: 'Add new Enrollments',
    operationId: 'AddEnrollments',
  })
  @ApiResponse({ status: 200, type: EnrollmentDto })
  @Post()
  async create(@Body() job: EnrollmentDto): Promise<EnrollmentDto> {
    return this.enrollmentService.create(job);
  }

  @ApiOperation({
    summary: 'Get all Enrollments',
    operationId: 'GetEnrollments',
  })
  @ApiResponse({ status: 200, type: EnrollmentDto })
  @Get()
  async findAll(): Promise<EnrollmentDto[]> {
    return this.enrollmentService.findAll();
  }

  @ApiOperation({
    summary: 'Get Enrollments by id',
    operationId: 'GetEnrollment',
  })
  @ApiResponse({ status: 200, type: EnrollmentDto })
  @Get(':enrollmentID')
  async findOne(@Param('enrollmentID') id: number): Promise<EnrollmentDto> {
    return this.enrollmentService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Enrollments by id',
    operationId: 'UpdateEnrollment',
  })
  @ApiResponse({ status: 200, type: EnrollmentDto })
  @Put(':enrollmentID')
  async update(@Param('enrollmentID') id: number, @Body() job: EnrollmentDto) {
    return this.enrollmentService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Enrollments by id',
    operationId: 'DeleteEnrollment',
  })
  @ApiResponse({ status: 200, type: EnrollmentDto })
  @Delete(':enrollmentID')
  async delete(@Param('enrollmentID') id: number) {
    return this.enrollmentService.deleteOne(id);
  }
}
