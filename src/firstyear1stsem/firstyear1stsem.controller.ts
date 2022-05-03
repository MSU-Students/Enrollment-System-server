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
import { Firstyear1stsemDto } from 'src/entities/firstyear1stsem.dto';
import { Firstyear1stsemService } from './firstyear1stsem.service';

@Controller('firstyear1stsem')
export class Firstyear1stsemController {
  constructor(private firstyear1stsemService: Firstyear1stsemService) {}

  @ApiBody({ type: Firstyear1stsemDto })
  @ApiOperation({
    summary: 'Add new 1stSubjectfor1styear',
    operationId: 'Add1stSubjectfor1styear',
  })
  @ApiResponse({ status: 200, type: Firstyear1stsemDto })
  @Post()
  async create(@Body() job: Firstyear1stsemDto): Promise<Firstyear1stsemDto> {
    return this.firstyear1stsemService.create(job);
  }

  @ApiOperation({
    summary: 'Get all 1stSubjectfor1styear',
    operationId: 'Get1stSubjectfor1styear',
  })
  @ApiResponse({ status: 200, type: Firstyear1stsemDto })
  @Get()
  async findAll(): Promise<Firstyear1stsemDto[]> {
    return this.firstyear1stsemService.findAll();
  }

  @ApiOperation({
    summary: 'Get all 1stSubjectsfor1styear by id',
    operationId: 'GetAll1stSubjectsfor1styear',
  })
  @ApiResponse({ status: 200, type: Firstyear1stsemDto })
  @Get(':firstyear1stSemID')
  async findOne(
    @Param('firstyear1stSemID') id: number,
  ): Promise<Firstyear1stsemDto> {
    return this.firstyear1stsemService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update 1stSubjectfor1styear by id',
    operationId: 'Update1stSubjectfor1styear',
  })
  @ApiResponse({ status: 200, type: Firstyear1stsemDto })
  @Put(':firstyear1stSemID')
  async update(
    @Param('firstyear1stSemID') id: number,
    @Body() job: Firstyear1stsemDto,
  ) {
    return this.firstyear1stsemService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete 1stSubjectsfor1styear by id',
    operationId: 'DeleteSubjectsfor1styear',
  })
  @ApiResponse({ status: 200, type: Firstyear1stsemDto })
  @Delete(':firstyear1stSemID')
  async delete(@Param('firstyear1stSemID') id: number) {
    return this.firstyear1stsemService.deleteOne(id);
  }
}
