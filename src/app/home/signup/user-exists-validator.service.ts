import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

import { SignupService } from './signup.service';

@Injectable({
  providedIn: 'root',
})
export class UserExistsValidatorService {
  constructor(private signupService: SignupService) {}

  isUsernameExists() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap((username) => this.signupService.isUsernameExists(username)))
        .pipe(map((isExists) => (isExists ? { usernameExists: true } : null)))
        .pipe(first());
    };
  }
}
