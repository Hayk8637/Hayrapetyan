import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  http: HttpClient;
  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }
  getLoads () {
    return this.http.get('https://localhost:3000/loads');
  }
}
