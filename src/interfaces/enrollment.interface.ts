import { Section } from './section.interface';
import { Teacher } from './teacher.interface';
export interface Enrollment {
  enrollmentID?: number;
  enteredsubjectCode: string;
  enteredsection: string;
  entereddescriptiveTitle: string;
  enteredtime: string;
  entereddate: string;
  enteredunits: string;
  enteredteacher: string;
}
