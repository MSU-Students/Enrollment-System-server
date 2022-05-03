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
import { Secondyear2ndsemDto } from 'src/entities/secondyear2ndsem.dto';
import { Secondyear2ndsemService } from './secondyear2ndsem.service';

@Controller('firstyear2ndsem')
export class Secondyear2ndsemController {
  constructor(private secondyear2ndsemService: Secondyear2ndsemService) {}

  @ApiBody({ type: Secondyear2ndsemDto })
  @ApiOperation({
    summary: 'Add new 2ndSubjectsfor2ndyear',
    operationId: 'Add2ndSubjectsfor2ndyear',
  })
  @ApiResponse({ status: 200, type: Secondyear2ndsemDto })
  @Post()
  async create(@Body() job: Secondyear2ndsemDto): Promise<Secondyear2ndsemDto> {
    return this.secondyear2ndsemService.create(job);
  }

  @ApiOperation({
    summary: 'Get all 2ndSubjectfor2ndyear',
    operationId: 'Get2ndSubjectfor2ndyear',
  })
  @ApiResponse({ status: 200, type: Secondyear2ndsemDto })
  @Get()
  async findAll(): Promise<Secondyear2ndsemDto[]> {
    return this.secondyear2ndsemService.findAll();
  }

  @ApiOperation({
    summary: 'Get all 2ndSubjectsfor2ndyear by id',
    operationId: 'GetAll2ndSubjectsfor2ndyear',
  })
  @ApiResponse({ status: 200, type: Secondyear2ndsemDto })
  @Get(':secondyear2ndSemID')
  async findOne(
    @Param('secondyear2ndSemID') id: number,
  ): Promise<Secondyear2ndsemDto> {
    return this.secondyear2ndsemService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update 2ndSubjectsfor2ndyear by id',
    operationId: 'Update2ndSubjectsfor2ndyear',
  })
  @ApiResponse({ status: 200, type: Secondyear2ndsemDto })
  @Put(':secondyear2ndSemID')
  async update(
    @Param('secondyear2ndSemID') id: number,
    @Body() job: Secondyear2ndsemDto,
  ) {
    return this.secondyear2ndsemService.update(id, job);
  }
}
