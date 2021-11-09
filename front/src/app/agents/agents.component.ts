import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  i = 'inline';
  p = 'none';
  constructor() { }

  ngOnInit() {
  }
  add() {
    if (this.i === 'none') {
      this.i = 'inline';
      this.p = 'none';
    } else {
      this.i = 'none';
      this.p = 'inline';
    }
  }
}
