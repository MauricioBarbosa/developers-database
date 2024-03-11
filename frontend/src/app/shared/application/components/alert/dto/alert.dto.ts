import { AlertTypes } from "../enum/alert-types";

export class AlertDto {
  message: string;
  alertType: AlertTypes;
  seconds: number;
}
