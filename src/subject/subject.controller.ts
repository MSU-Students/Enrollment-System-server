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
import { SubjectDto } from 'src/entities/subject.dto';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @ApiBody({ type: SubjectDto })
  @ApiOperation({
    summary: 'Add new Subject',
    operationId: 'AddSubject',
  })
  @ApiResponse({ status: 200, type: SubjectDto })
  @Post()
  async create(@Body() job: SubjectDto): Promise<SubjectDto> {
    return this.subjectService.create(job);
  }

  @ApiOperation({ summary: 'Get all Subjects', operationId: 'GetAllSubjects' })
  @ApiResponse({ status: 200, type: SubjectDto })
  @Get()
  async findAll(): Promise<SubjectDto[]> {
    return this.subjectService.findAll();
  }

  @ApiOperation({ summary: 'Get Subjects by id', operationId: 'GetSubject' })
  @ApiResponse({ status: 200, type: SubjectDto })
  @Get(':subjectID')
  async findOne(@Param('subjectID') id: number): Promise<SubjectDto> {
    return this.subjectService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Subjects by id',
    operationId: 'UpdateSubject',
  })
  @ApiResponse({ status: 200, type: SubjectDto })
  @Put(':subjectID')
  async update(@Param('subjectID') id: number, @Body() job: SubjectDto) {
    return this.subjectService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Subjects by id',
    operationId: 'DeleteOneSubject',
  })
  @ApiResponse({ status: 200, type: SubjectDto })
  @Delete(':subjectID')
  async delete(@Param('subjectID') id: number) {
    return this.subjectService.deleteOne(id);
  }
}
