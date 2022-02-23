import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Load} from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  http: HttpClient;
  loads: Load[];
  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }
  getLoads() {
    return  this.http.get<any>('https://localhost:3000/loads').subscribe(data => {
      this.loads = data;
    });
  }
}
