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
import { Secondyear1stsemDto } from 'src/entities/secondyear1stsem.dto';
import { Secondyear1stsemService } from './secondyear1stsem.service';

@Controller('secondyear1stsem')
export class Secondyear1stsemController {
  constructor(private Secondyear1stsemService: Secondyear1stsemService) {}

  @ApiBody({ type: Secondyear1stsemDto })
  @ApiOperation({
    summary: 'Add new 1stSubjectfor2ndyear',
    operationId: 'Add1stSubjectfor2ndyear',
  })
  @ApiResponse({ status: 200, type: Secondyear1stsemDto })
  @Post()
  async create(@Body() job: Secondyear1stsemDto): Promise<Secondyear1stsemDto> {
    return this.Secondyear1stsemService.create(job);
  }

  @ApiOperation({
    summary: 'Get all 1stSubjectfor2ndyear',
    operationId: 'Get1stSubjectfor2ndyear',
  })
  @ApiResponse({ status: 200, type: Secondyear1stsemDto })
  @Get()
  async findAll(): Promise<Secondyear1stsemDto[]> {
    return this.Secondyear1stsemService.findAll();
  }

  @ApiOperation({
    summary: 'Get all 1stSubjectsfor2ndyear by id',
    operationId: 'GetAll1stSubjectsfor2ndyear',
  })
  @ApiResponse({ status: 200, type: Secondyear1stsemDto })
  @Get(':secondyear1stSemID')
  async findOne(
    @Param('secondyear1stSemID') id: number,
  ): Promise<Secondyear1stsemDto> {
    return this.Secondyear1stsemService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update 1stSubjectfor2ndyear by id',
    operationId: 'Update1stSubjectfor2ndyear',
  })
  @ApiResponse({ status: 200, type: Secondyear1stsemDto })
  @Put(':secondyear1stSemID')
  async update(
    @Param('secondyear1stSemID') id: number,
    @Body() job: Secondyear1stsemDto,
  ) {
    return this.Secondyear1stsemService.update(id, job);
  }
}
