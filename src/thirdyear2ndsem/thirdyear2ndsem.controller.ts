import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Thirdyear2ndsemDto } from 'src/entities/thirdyear2ndsem.dto';
import { Thirdyear2ndsemService } from './thirdyear2ndsem.service';

@Controller('thirdyear2ndsem')
export class Thirdyear2ndsemController {
  constructor(private thirdyear2ndsemService: Thirdyear2ndsemService) {}

  @ApiBody({ type: Thirdyear2ndsemDto })
  @ApiOperation({
    summary: 'Add new 2ndSubjectsfor3rdyear',
    operationId: 'Add2ndSubjectsfor3rdyear',
  })
  @ApiResponse({ status: 200, type: Thirdyear2ndsemDto })
  @Post()
  async create(@Body() job: Thirdyear2ndsemDto): Promise<Thirdyear2ndsemDto> {
    return this.thirdyear2ndsemService.create(job);
  }

  @ApiOperation({
    summary: 'Get all 2ndSubjectfor3rdyear',
    operationId: 'Get2ndSubjectfor3rdyear',
  })
  @ApiResponse({ status: 200, type: Thirdyear2ndsemDto })
  @Get()
  async findAll(): Promise<Thirdyear2ndsemDto[]> {
    return this.thirdyear2ndsemService.findAll();
  }

  @ApiOperation({
    summary: 'Get all 2ndSubjectsfor3rdyear by id',
    operationId: 'GetAll2ndSubjectsfor3rdyear',
  })
  @ApiResponse({ status: 200, type: Thirdyear2ndsemDto })
  @Get(':thirdyear2ndSemID')
  async findOne(
    @Param('thirdyear2ndSemID') id: number,
  ): Promise<Thirdyear2ndsemDto> {
    return this.thirdyear2ndsemService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update 2ndSubjectsfor3rdyear by id',
    operationId: 'Update2ndSubjectsfor3rdyear',
  })
  @ApiResponse({ status: 200, type: Thirdyear2ndsemDto })
  @Put(':thirdyear2ndSemID')
  async update(
    @Param('thirdyear2ndSemID') id: number,
    @Body() job: Thirdyear2ndsemDto,
  ) {
    return this.thirdyear2ndsemService.update(id, job);
  }
}
