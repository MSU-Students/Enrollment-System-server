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
import { Fourthyear1stsemDto } from 'src/entities/fourthyear1stsem.dto';
import { Fourthyear1stsemService } from './fourthyear1stsem.service';

@Controller('fourthgyear1stsem')
export class Fourthyear1stsemController {
  constructor(private fourthyear1stsemService: Fourthyear1stsemService) {}

  @ApiBody({ type: Fourthyear1stsemDto })
  @ApiOperation({
    summary: 'Add new 1stSubjectfor4thyear',
    operationId: 'Add1stSubjectfor4thyear',
  })
  @ApiResponse({ status: 200, type: Fourthyear1stsemDto })
  @Post()
  async create(@Body() job: Fourthyear1stsemDto): Promise<Fourthyear1stsemDto> {
    return this.fourthyear1stsemService.create(job);
  }

  @ApiOperation({
    summary: 'Get all 1stSubjectfor4thyear',
    operationId: 'Get1stSubjectfor4thyear',
  })
  @ApiResponse({ status: 200, type: Fourthyear1stsemDto })
  @Get()
  async findAll(): Promise<Fourthyear1stsemDto[]> {
    return this.fourthyear1stsemService.findAll();
  }

  @ApiOperation({
    summary: 'Get all 1stSubjectsfor4thyear by id',
    operationId: 'GetAll1stSubjectsfor4thyear',
  })
  @ApiResponse({ status: 200, type: Fourthyear1stsemDto })
  @Get(':firstyear1stSemID')
  async findOne(
    @Param('firstyear1stSemID') id: number,
  ): Promise<Fourthyear1stsemDto> {
    return this.fourthyear1stsemService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update 1stSubjectfor4thyear by id',
    operationId: 'Update1stSubjectfor4thyear',
  })
  @ApiResponse({ status: 200, type: Fourthyear1stsemDto })
  @Put(':firstyear1stSemID')
  async update(
    @Param('firstyear1stSemID') id: number,
    @Body() job: Fourthyear1stsemDto,
  ) {
    return this.fourthyear1stsemService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete 1stSubjectsfor4thyear by id',
    operationId: 'DeleteSubjectsfor4thyear',
  })
  @ApiResponse({ status: 200, type: Fourthyear1stsemDto })
  @Delete(':firstyear1stSemID')
  async delete(@Param('firstyear1stSemID') id: number) {
    return this.fourthyear1stsemService.deleteOne(id);
  }
}
