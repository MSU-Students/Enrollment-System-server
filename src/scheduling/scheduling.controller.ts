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
import { SchedulingDto } from 'src/entities/scheduling.dto';
import { SchedulingService } from './scheduling.service';

@Controller('scheduling')
export class SchedulingController {
  constructor(private schedulingService: SchedulingService) {}

  @ApiBody({ type: SchedulingDto })
  @ApiOperation({
    summary: 'Add new Schedulings',
    operationId: 'AddSchedulings',
  })
  @ApiResponse({ status: 200, type: SchedulingDto })
  @Post()
  async create(@Body() job: SchedulingDto): Promise<SchedulingDto> {
    return this.schedulingService.create(job);
  }

  @ApiOperation({
    summary: 'Get all Schedulings',
    operationId: 'GetSchedulings',
  })
  @ApiResponse({ status: 200, type: SchedulingDto })
  @Get()
  async findAll(): Promise<SchedulingDto[]> {
    return this.schedulingService.findAll();
  }

  @ApiOperation({
    summary: 'Get Schedulings by id',
    operationId: 'GetScheduling',
  })
  @ApiResponse({ status: 200, type: SchedulingDto })
  @Get(':SchedulingID')
  async findOne(@Param('SchedulingID') id: number): Promise<SchedulingDto> {
    return this.schedulingService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Schedulings by id',
    operationId: 'UpdateScheduling',
  })
  @ApiResponse({ status: 200, type: SchedulingDto })
  @Put(':SchedulingID')
  async update(@Param('SchedulingID') id: number, @Body() job: SchedulingDto) {
    return this.schedulingService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Schedulings by id',
    operationId: 'DeleteScheduling',
  })
  @ApiResponse({ status: 200, type: SchedulingDto })
  @Delete(':SchedulingID')
  async delete(@Param('SchedulingID') id: number) {
    return this.schedulingService.deleteOne(id);
  }
}
