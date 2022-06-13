import { Section } from './section.interface';
import { Teacher } from './teacher.interface';
export interface Enrollment {
  enrollmentID?: string;
  studentIdnumber: string;
  fullName: string;
  academicYear: string;
  semester: string;
  yearLevel: string;
  course: string;
  Teacher: string;
  subjectCode: string;
  descriptiveTitle: string;
  units: string;
  Section: string;
  timeAnddate: string;
}
