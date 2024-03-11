import { Injectable } from "@angular/core";
import { Observable, Subscriber } from "rxjs";
import { AlertDto } from "../dto/alert.dto";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  private alerts: AlertDto[];
  private alertsObservable: Observable<AlertDto[]>;
  private alertsObservableSubscriber: Subscriber<AlertDto[]>;

  constructor() {
    this.alerts = [];
    this.alertsObservable = new Observable((subscriber) => {
      this.alertsObservableSubscriber = subscriber;
    });
  }

  public getAlerts(): AlertDto[] {
    return this.alerts;
  }

  public subscribeToAlertsObservable(): Observable<AlertDto[]> {
    return this.alertsObservable;
  }

  public push(alert: AlertDto) {
    this.alerts.push(alert);
    this.alertsObservableSubscriber?.next(this.alerts);

    setTimeout(() => {
      this.removeAlert(this.alerts.length);
    }, this.convertSecondsToMiliSeconds(alert.seconds));
  }

  private convertSecondsToMiliSeconds(seconds: number): number {
    return seconds * 1000;
  }

  private removeAlert(index: number) {
    this.alerts = this.alerts.slice(1, index);
    this.alertsObservableSubscriber.next(this.alerts);
  }
}
