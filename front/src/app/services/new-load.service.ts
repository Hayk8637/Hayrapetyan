import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewLoadService {
  http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }
}
