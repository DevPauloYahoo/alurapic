import { Component, Input, OnInit } from '@angular/core';

import { AlertGlobalService } from './alert-global.service';
import { Alert, AlertType } from './alert.class';

@Component({
  selector: 'ap-alert-global',
  templateUrl: './alert-global.component.html',
  styleUrls: ['./alert-global.component.scss'],
})
export class AlertGlobalComponent implements OnInit {
  @Input() timeout = 3000;
  alerts: Alert[] = [];

  constructor(private alertGlobalService: AlertGlobalService) {}

  ngOnInit() {
    this.alertGlobalService.getAlert().subscribe({
      next: (alert) => {
        if (!alert) {
          this.alerts = [];
          return;
        }
        this.alerts.push(alert);
        setTimeout(() => this.removeAlert(alert), this.timeout);
      },
    });
  }

  getAlertClass(alert: Alert) {
    if (!alert) {
      return '';
    }
    switch (alert.alertType) {
      case AlertType.SUCCESS:
        return 'alert alert-success';

      case AlertType.INFO:
        return 'alert alert-info';

      case AlertType.WARNING:
        return 'alert alert-warning';

      case AlertType.DANGER:
        return 'alert alert-danger';
    }
  }

  private removeAlert(alertToRemove: Alert) {
    this.alerts = this.alerts.filter((alert) => alert !== alertToRemove);
  }
}
