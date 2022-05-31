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
import { SectionDto } from 'src/entities/section.dto';
import { SectionService } from './section.service';

@Controller('section')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @ApiBody({ type: SectionDto })
  @ApiOperation({
    summary: 'Add new Sections',
    operationId: 'AddSections',
  })
  @ApiResponse({ status: 200, type: SectionDto })
  @Post()
  async create(@Body() job: SectionDto): Promise<SectionDto> {
    return this.sectionService.create(job);
  }

  @ApiOperation({ summary: 'Get all Sections', operationId: 'GetSections' })
  @ApiResponse({ status: 200, type: SectionDto })
  @Get()
  async findAll(): Promise<SectionDto[]> {
    return this.sectionService.findAll();
  }

  @ApiOperation({ summary: 'Get Sections by id', operationId: 'GetSection' })
  @ApiResponse({ status: 200, type: SectionDto })
  @Get(':SectionID')
  async findOne(@Param('SectionID') id: number): Promise<SectionDto> {
    return this.sectionService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Sections by id',
    operationId: 'UpdateSection',
  })
  @ApiResponse({ status: 200, type: SectionDto })
  @Put(':SectionID')
  async update(@Param('SectionID') id: number, @Body() job: SectionDto) {
    return this.sectionService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Sections by id',
    operationId: 'DeleteSection',
  })
  @ApiResponse({ status: 200, type: SectionDto })
  @Delete(':SectionID')
  async delete(@Param('SectionID') id: number) {
    return this.sectionService.deleteOne(id);
  }
}
