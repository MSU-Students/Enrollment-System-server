import { Injectable } from '@nestjs/common';
import { ReportandreportsDto } from 'src/entities/reportandreports.dto';

@Injectable()
export class ReportandreportsService {
  enrollmentRepository: any;
  async findAll(): Promise<ReportandreportsDto[]> {
    return this.enrollmentRepository.find({
      relations: ['Section', 'subject'],
    });
  }
}
