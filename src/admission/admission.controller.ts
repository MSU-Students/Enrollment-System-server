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
  constructor(private UserService: AdmissionService) {}

  @ApiBody({ type: AdmissionDto })
  @ApiOperation({
    summary: 'Add new Users',
    operationId: 'AddUsers',
  })
  @ApiResponse({ status: 200, type: AdmissionDto })
  @Post()
  async create(@Body() job: AdmissionDto): Promise<AdmissionDto> {
    return this.UserService.create(job);
  }

  @ApiOperation({ summary: 'Get all Users', operationId: 'GetUserss' })
  @ApiResponse({ status: 200, type: AdmissionDto })
  @Get()
  async findAll(): Promise<AdmissionDto[]> {
    return this.UserService.findAll();
  }

  @ApiOperation({ summary: 'Get Users by id', operationId: 'GetUsers' })
  @ApiResponse({ status: 200, type: AdmissionDto })
  @Get(':userID')
  async findOne(@Param('userID') id: number): Promise<AdmissionDto> {
    return this.UserService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Users by id',
    operationId: 'UpdateUsers',
  })
  @ApiResponse({ status: 200, type: AdmissionDto })
  @Put(':userID')
  async update(@Param('userID') id: number, @Body() job: AdmissionDto) {
    return this.UserService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Users by id',
    operationId: 'DeleteUsers',
  })
  @ApiResponse({ status: 200, type: AdmissionDto })
  @Delete(':userID')
  async delete(@Param('userID') id: number) {
    return this.UserService.deleteOne(id);
  }
}
