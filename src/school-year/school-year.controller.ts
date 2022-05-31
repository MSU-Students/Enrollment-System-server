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
import { SchoolYearDto } from 'src/entities/school-year.dto';
import { SchoolYearService } from './school-year.service';

@Controller('schoolyear')
export class SchoolYearController {
  constructor(private SchoolYearService: SchoolYearService) {}

  @ApiBody({ type: SchoolYearDto })
  @ApiOperation({
    summary: 'Add new SchoolYears',
    operationId: 'AddSchoolYears',
  })
  @ApiResponse({ status: 200, type: SchoolYearDto })
  @Post()
  async create(@Body() job: SchoolYearDto): Promise<SchoolYearDto> {
    return this.SchoolYearService.create(job);
  }

  @ApiOperation({
    summary: 'Get all SchoolYears',
    operationId: 'GetSchoolYears',
  })
  @ApiResponse({ status: 200, type: SchoolYearDto })
  @Get()
  async findAll(): Promise<SchoolYearDto[]> {
    return this.SchoolYearService.findAll();
  }

  @ApiOperation({
    summary: 'Get SchoolYears by id',
    operationId: 'GetSchoolYear',
  })
  @ApiResponse({ status: 200, type: SchoolYearDto })
  @Get(':schoolyearid')
  async findOne(@Param('schoolyearid') id: number): Promise<SchoolYearDto> {
    return this.SchoolYearService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update SchoolYears by id',
    operationId: 'UpdateSchoolYear',
  })
  @ApiResponse({ status: 200, type: SchoolYearDto })
  @Put(':schoolyearid')
  async update(@Param('schoolyearid') id: number, @Body() job: SchoolYearDto) {
    return this.SchoolYearService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete SchoolYears by id',
    operationId: 'DeleteSchoolYear',
  })
  @ApiResponse({ status: 200, type: SchoolYearDto })
  @Delete(':schoolyearid')
  async delete(@Param('schoolyearid') id: number) {
    return this.SchoolYearService.deleteOne(id);
  }
}
