import { Component } from '@angular/core';
import { AlertTypes } from './enum/alert-types';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  message: string;
  alertType: AlertTypes;
  showAlert: boolean;

  constructor() {
    this.showAlert = false;
    this.message = '';
    this.alertType = null;
  }

  show(seconds: number, alertType: AlertTypes, message) {
    this.showAlert = true;
    this.message = message;
    this.alertType = alertType;

    setTimeout(() => {
      this.showAlert = false;
      this.message = '';
      this.alertType = null;
    }, this.convertSecondsToMiliSeconds(seconds));
  }

  private convertSecondsToMiliSeconds(
    seconds: number
  ): number {
    return seconds * 1000;
  }
}
