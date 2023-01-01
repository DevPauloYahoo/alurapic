import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null,
  );

  constructor(private tokenService: TokenService) {
    tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    if (token) {
      const user = jwt_decode(token) as User;
      this.userSubject.next(user);
    }
  }
}
