import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userName: string | undefined;
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

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    if (token) {
      const user: User = jwt_decode(token);
      this.userName = user.name;
      this.userSubject.next(user);
    }
  }
}
