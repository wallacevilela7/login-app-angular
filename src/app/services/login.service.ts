import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = "http://localhost:8080/auth";
  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.API_URL + "/login", { email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.token);
        sessionStorage.setItem("username", value.username);
      })
    )
  }

  singup(username: string, email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.API_URL + "/register", { username, email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.token);
        sessionStorage.setItem("username", value.username);
      })
    )
  }
}
