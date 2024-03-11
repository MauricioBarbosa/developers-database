import { Component, Injectable } from "@angular/core";
import { AlertDto } from "./dto/alert.dto";
import { AlertService } from "./service/alert.service";

@Component({
  selector: "alert",
  templateUrl: "./alert.component.html",
  styleUrl: "./alert.component.css",
})
@Injectable()
export class AlertComponent {
  public alerts: AlertDto[];
  public alertPositions: string[];

  constructor(public readonly alertService: AlertService) {}

  ngOnInit() {
    this.alerts = this.alertService.getAlerts();

    this.alertService.subscribeToAlertsObservable().subscribe((newAlerts) => {
      this.alerts = newAlerts;

      this.calculatePositions();
    });
  }

  private calculatePositions() {
    let top = 20;
    this.alertPositions = [];

    this.alerts.map(() => {
      this.alertPositions.push(`${top}px`);

      top += top + 2;
    });
  }
}
