import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  isUsernameExists(username: string) {
    return this.http.get(`${API_URL}/user/exists/${username}`);
  }
}
