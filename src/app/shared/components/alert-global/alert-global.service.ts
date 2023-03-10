import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { Alert, AlertType } from './alert.class';

@Injectable({
  providedIn: 'root',
})
export class AlertGlobalService {
  alertSubject: Subject<Alert | null> = new Subject<Alert | null>();
  keepAfterRouteChange = false;

  constructor(router: Router) {
    router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationStart) {
          if (this.keepAfterRouteChange) {
            this.keepAfterRouteChange = false;
          } else {
            this.clear();
          }
        }
      },
    });
  }

  success(message: string, keepAfterRouteChange: boolean = false): void {
    this.alert(AlertType.SUCCESS, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange: boolean = false): void {
    this.alert(AlertType.INFO, message, keepAfterRouteChange);
  }

  warning(message: string, keepAfterRouteChange: boolean = false): void {
    this.alert(AlertType.WARNING, message, keepAfterRouteChange);
  }

  danger(message: string, keepAfterRouteChange: boolean = false): void {
    this.alert(AlertType.DANGER, message, keepAfterRouteChange);
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }

  clear() {
    this.alertSubject.next(null);
  }

  private alert(
    alertType: AlertType,
    message: string,
    keepAfterRouteChange: boolean,
  ): void {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.alertSubject.next(new Alert(alertType, message));
  }
}
