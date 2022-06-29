import { StudentRecordDto } from 'src/entities/student-record.dto';
import { StudentRecordService } from './student-record.service';
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

@Controller('student-record')
export class StudentRecordController {
  constructor(private StudentRecordService: StudentRecordService) {}

  @ApiBody({ type: StudentRecordDto })
  @ApiOperation({
    summary: 'Add new Student Record',
    operationId: 'AddStudentRecord',
  })
  @ApiResponse({ status: 200, type: StudentRecordDto })
  @Post()
  async create(@Body() job: StudentRecordDto): Promise<StudentRecordDto> {
    return this.StudentRecordService.create(job);
  }

  @ApiOperation({
    summary: 'Get all Student Record',
    operationId: 'GetStudentRecords',
  })
  @ApiResponse({ status: 200, type: StudentRecordDto })
  @Get()
  async findAll(): Promise<StudentRecordDto[]> {
    return this.StudentRecordService.findAll();
  }

  @ApiOperation({
    summary: 'Get Student Record by id',
    operationId: 'GetStudentRecord',
  })
  @ApiResponse({ status: 200, type: StudentRecordDto })
  @Get(':StudentRecordID')
  async findOne(
    @Param('StudentRecordID') id: number,
  ): Promise<StudentRecordDto> {
    return this.StudentRecordService.findOne(id);
  }

  @ApiOperation({
    summary: 'Update Student Record by id',
    operationId: 'UpdateStudentRecord',
  })
  @ApiResponse({ status: 200, type: StudentRecordDto })
  @Put(':StudentRecordID')
  async update(
    @Param('StudentRecordID') id: number,
    @Body() job: StudentRecordDto,
  ) {
    return this.StudentRecordService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Student Record by id',
    operationId: 'DeleteStudentRecord',
  })
  @ApiResponse({ status: 200, type: StudentRecordDto })
  @Delete(':StudentRecordID')
  async delete(@Param('StudentRecordID') id: number) {
    return this.StudentRecordService.deleteOne(id);
  }
}
