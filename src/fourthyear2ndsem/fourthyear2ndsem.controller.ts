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
import { Fourthyear2ndsemDto } from 'src/entities/fourthyear2ndsem.dto';
import { Fourthyear2ndsemService } from './fourthyear2ndsem.service';

@Controller('fourthyear2ndsem')
export class Fourthyear2ndsemController {
  constructor(private fourthyear2ndsemService: Fourthyear2ndsemService) {}

  @ApiBody({ type: Fourthyear2ndsemDto })
  @ApiOperation({
    summary: 'Add new 2ndSubjectsfor4thyear',
    operationId: 'Add2ndSubjectsfor4thyear',
  })
  @ApiResponse({ status: 200, type: Fourthyear2ndsemDto })
  @Post()
  async create(@Body() job: Fourthyear2ndsemDto): Promise<Fourthyear2ndsemDto> {
    return this.fourthyear2ndsemService.create(job);
  }

  @ApiOperation({
    summary: 'Get all 2ndSubjectfor4thyear',
    operationId: 'Get2ndSubjectfor4thyear',
  })
  @ApiResponse({ status: 200, type: Fourthyear2ndsemDto })
  @Get()
  async findAll(): Promise<Fourthyear2ndsemDto[]> {
    return this.fourthyear2ndsemService.findAll();
  }

  @ApiOperation({
    summary: 'Get all 2ndSubjectsfor4thyear by id',
    operationId: 'GetAll2ndSubjectsfor4thyear',
  })
  @ApiResponse({ status: 200, type: Fourthyear2ndsemDto })
  @Get(':fourthyear2ndSemID')
  async findOne(
    @Param('fourthyear2ndSemID') id: number,
  ): Promise<Fourthyear2ndsemDto> {
    return this.fourthyear2ndsemService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update 2ndSubjectsfor4thyear by id',
    operationId: 'Update2ndSubjectsfor4thyear',
  })
  @ApiResponse({ status: 200, type: Fourthyear2ndsemDto })
  @Put(':fourthyear2ndSemID')
  async update(
    @Param('fourthyear2ndSemID') id: number,
    @Body() job: Fourthyear2ndsemDto,
  ) {
    return this.fourthyear2ndsemService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete 2ndSubjectsfor4thyear by id',
    operationId: 'DeleteOneSubjectsfor4thyear',
  })
  @ApiResponse({ status: 200, type: Fourthyear2ndsemDto })
  @Delete(':fourthyear2ndSemID')
  async delete(@Param('fourthyear2ndSemID') id: number) {
    return this.fourthyear2ndsemService.deleteOne(id);
  }
}
