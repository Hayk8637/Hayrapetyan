import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Load } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewLoadService {
  http: HttpClient;
  newLoad: Load;
  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }
  AddNewLoad(data) {
    this.http.post( 'https://localhost:3000/loads' , data);
  }
}
