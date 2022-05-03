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
import { Firstyear2ndsemDto } from 'src/entities/firstyear2ndsem.dto';
import { Firstyear2ndsemService } from './firstyear2ndsem.service';

@Controller('secondyear2ndsem')
export class Firstyear2ndsemController {
  constructor(private firstyear2ndsemService: Firstyear2ndsemService) {}

  @ApiBody({ type: Firstyear2ndsemDto })
  @ApiOperation({
    summary: 'Add new 2ndSubjectsfor1styear',
    operationId: 'Add2ndSubjectsfor1styear',
  })
  @ApiResponse({ status: 200, type: Firstyear2ndsemDto })
  @Post()
  async create(@Body() job: Firstyear2ndsemDto): Promise<Firstyear2ndsemDto> {
    return this.firstyear2ndsemService.create(job);
  }

  @ApiOperation({
    summary: 'Get all 2ndSubjectfor1styear',
    operationId: 'Get2ndSubjectfor1styear',
  })
  @ApiResponse({ status: 200, type: Firstyear2ndsemDto })
  @Get()
  async findAll(): Promise<Firstyear2ndsemDto[]> {
    return this.firstyear2ndsemService.findAll();
  }

  @ApiOperation({
    summary: 'Get all 2ndSubjectsfor1styear by id',
    operationId: 'GetAll2ndSubjectsfor1styear',
  })
  @ApiResponse({ status: 200, type: Firstyear2ndsemDto })
  @Get(':firstyear2ndSemID')
  async findOne(
    @Param('firstyear2ndSemID') id: number,
  ): Promise<Firstyear2ndsemDto> {
    return this.firstyear2ndsemService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update 2ndSubjectsfor1styear by id',
    operationId: 'Update2ndSubjectsfor1styear',
  })
  @ApiResponse({ status: 200, type: Firstyear2ndsemDto })
  @Put(':firstyear2ndSemID')
  async update(
    @Param('firstyear2ndSemID') id: number,
    @Body() job: Firstyear2ndsemDto,
  ) {
    return this.firstyear2ndsemService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete 2ndSubjectsfor1styear by id',
    operationId: 'DeleteOneSubjectsfor1styear',
  })
  @ApiResponse({ status: 200, type: Firstyear2ndsemDto })
  @Delete(':firstyear2ndSemID')
  async delete(@Param('firstyear2ndSemID') id: number) {
    return this.firstyear2ndsemService.deleteOne(id);
  }
}
