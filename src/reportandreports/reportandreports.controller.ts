import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReportandreportsDto } from 'src/entities/reportandreports.dto';
import { ReportandreportsService } from './reportandreports.service';

@Controller('reportandreports')
export class ReportandreportsController {
  constructor(private reportreportsService: ReportandreportsService) {}

  @ApiOperation({ summary: 'Get all Courses', operationId: 'GetReportCourses' })
  @ApiResponse({ status: 200, type: ReportandreportsDto })
  @Get()
  async findAll(): Promise<ReportandreportsDto[]> {
    return this.reportreportsService.findAll();
  }
}
