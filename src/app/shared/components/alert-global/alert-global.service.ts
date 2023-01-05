import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Alert, AlertType } from './alert.class';

@Injectable({
  providedIn: 'root',
})
export class AlertGlobalService {
  alertSubject: Subject<Alert> = new Subject<Alert>();

  success(message: string): void {
    this.alert(AlertType.SUCCESS, message);
  }

  info(message: string): void {
    this.alert(AlertType.INFO, message);
  }

  warning(message: string): void {
    this.alert(AlertType.WARNING, message);
  }

  danger(message: string): void {
    this.alert(AlertType.DANGER, message);
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }

  private alert(alertType: AlertType, message: string): void {
    this.alertSubject.next(new Alert(alertType, message));
  }
}
