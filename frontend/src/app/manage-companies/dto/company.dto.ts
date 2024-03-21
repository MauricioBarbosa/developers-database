import { CompanyStatuses } from "../enum/company-statuses.enum";
import { NationalityDto } from "./nationality.dto";

export class CompanyDto {
  name: string;
  creationDate: string;
  nationality: NationalityDto;
  status: CompanyStatuses;
}
