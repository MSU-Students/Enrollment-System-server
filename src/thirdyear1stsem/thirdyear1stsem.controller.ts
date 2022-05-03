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
import { Thirdyear1stsemDto } from 'src/entities/thirdyear1stsem.dto';
import { Thirdyear1stsemService } from './thirdyear1stsem.service';

@Controller('thirdyear1stsem')
export class Thirdyear1stsemController {
  constructor(private thirdyear1stsemService: Thirdyear1stsemService) {}

  @ApiBody({ type: Thirdyear1stsemDto })
  @ApiOperation({
    summary: 'Add new 1stSubjectfor3rdyear',
    operationId: 'Add1stSubjectfor3rdyear',
  })
  @ApiResponse({ status: 200, type: Thirdyear1stsemDto })
  @Post()
  async create(@Body() job: Thirdyear1stsemDto): Promise<Thirdyear1stsemDto> {
    return this.thirdyear1stsemService.create(job);
  }

  @ApiOperation({
    summary: 'Get all 1stSubjectfor3rdyear',
    operationId: 'Get1stSubjectfor13rdyear',
  })
  @ApiResponse({ status: 200, type: Thirdyear1stsemDto })
  @Get()
  async findAll(): Promise<Thirdyear1stsemDto[]> {
    return this.thirdyear1stsemService.findAll();
  }

  @ApiOperation({
    summary: 'Get all 1stSubjectsfor3rdyear by id',
    operationId: 'GetAll1stSubjectsfor3rdyear',
  })
  @ApiResponse({ status: 200, type: Thirdyear1stsemDto })
  @Get(':thirdyear1stSemID')
  async findOne(
    @Param('thirdyear1stSemID') id: number,
  ): Promise<Thirdyear1stsemDto> {
    return this.thirdyear1stsemService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update 1stSubjectfor3rdyear by id',
    operationId: 'Update1stSubjectfor3rdyear',
  })
  @ApiResponse({ status: 200, type: Thirdyear1stsemDto })
  @Put(':thirdyear1stSemID')
  async update(
    @Param('thirdyear1stSemID') id: number,
    @Body() job: Thirdyear1stsemDto,
  ) {
    return this.thirdyear1stsemService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete 1stSubjectsfor3rdyear by id',
    operationId: 'DeleteSubjectsfor3rdyear',
  })
  @ApiResponse({ status: 200, type: Thirdyear1stsemDto })
  @Delete(':thirdyear1stSemID')
  async delete(@Param('thirdyear1stSemID') id: number) {
    return this.thirdyear1stsemService.deleteOne(id);
  }
}
