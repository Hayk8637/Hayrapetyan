import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Agent} from 'src/interfaces'
@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  http: HttpClient;
  agents: Agent[];
  search;
  constructor(httpClient: HttpClient) {
    this.http = httpClient
  }
  SearchAgent(search) {

  }
  getAgents( ){
    return  this.http.get<any>('https://localhost:3000/agents').subscribe(data => {
      this.agents = data;
    });
  }
}
