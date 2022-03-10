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
import { SubjectDto } from 'src/entities/subject.dto';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private UserService: SubjectService) {}

  @ApiBody({ type: SubjectDto })
  @ApiOperation({
    summary: 'Add new Users',
    operationId: 'AddUsers',
  })
  @ApiResponse({ status: 200, type: SubjectDto })
  @Post()
  async create(@Body() job: SubjectDto): Promise<SubjectDto> {
    return this.UserService.create(job);
  }

  @ApiOperation({ summary: 'Get all Users', operationId: 'GetUserss' })
  @ApiResponse({ status: 200, type: SubjectDto })
  @Get()
  async findAll(): Promise<SubjectDto[]> {
    return this.UserService.findAll();
  }

  @ApiOperation({ summary: 'Get Users by id', operationId: 'GetUsers' })
  @ApiResponse({ status: 200, type: SubjectDto })
  @Get(':userID')
  async findOne(@Param('userID') id: number): Promise<SubjectDto> {
    return this.UserService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Users by id',
    operationId: 'UpdateUsers',
  })
  @ApiResponse({ status: 200, type: SubjectDto })
  @Put(':userID')
  async update(@Param('userID') id: number, @Body() job: SubjectDto) {
    return this.UserService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Users by id',
    operationId: 'DeleteUsers',
  })
  @ApiResponse({ status: 200, type: SubjectDto })
  @Delete(':userID')
  async delete(@Param('userID') id: number) {
    return this.UserService.deleteOne(id);
  }
}
