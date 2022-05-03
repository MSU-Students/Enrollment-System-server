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
import { AdmissionDto } from 'src/entities/admission.dto';
import { AdmissionService } from './admission.service';

@Controller('admission')
export class AdmissionController {
  constructor(private admissionService: AdmissionService) {}

  @ApiBody({ type: AdmissionDto })
  @ApiOperation({
    summary: 'Add new Admissions',
    operationId: 'AddAdmissions',
  })
  @ApiResponse({ status: 200, type: AdmissionDto })
  @Post()
  async create(@Body() job: AdmissionDto): Promise<AdmissionDto> {
    return this.admissionService.create(job);
  }

  @ApiOperation({ summary: 'Get all Admissions', operationId: 'GetAdmissions' })
  @ApiResponse({ status: 200, type: AdmissionDto })
  @Get()
  async findAll(): Promise<AdmissionDto[]> {
    return this.admissionService.findAll();
  }

  @ApiOperation({
    summary: 'Get Admissions by id',
    operationId: 'GetAdmission',
  })
  @ApiResponse({ status: 200, type: AdmissionDto })
  @Get(':admissionID')
  async findOne(@Param('admissionID') id: number): Promise<AdmissionDto> {
    return this.admissionService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Admission by id',
    operationId: 'UpdateAdmissions',
  })
  @ApiResponse({ status: 200, type: AdmissionDto })
  @Put(':admissionID')
  async update(@Param('admissionID') id: number, @Body() job: AdmissionDto) {
    return this.admissionService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Admissions by id',
    operationId: 'DeleteAdmissions',
  })
  @ApiResponse({ status: 200, type: AdmissionDto })
  @Delete(':admissionID')
  async delete(@Param('admissionID') id: number) {
    return this.admissionService.deleteOne(id);
  }
}
