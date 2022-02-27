import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {
  http: HttpClient;
  agents: Agent[];

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  getAgents() {
    return this.http.get<any>('https://localhost:3000/agents').subscribe(data => {
      this.agents = data;
    });
  }
}
