import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LogInService {
  http: HttpClient;
  constructor(httpClient: HttpClient) { }
  LogIn(data) {
    return this.http.post( 'https://localhost:3000/login' , data);
  }
}
