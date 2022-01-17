import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {AgentsService} from '../services/agents.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  i = 'inline';
  p = 'none';

addAgent = new FormGroup({
  name : new FormControl('', [Validators.minLength(2)  , Validators.required ]),
  surname : new FormControl('' , [Validators.minLength(2) , Validators.required ]),
  email : new FormControl('' , [Validators.email , Validators.required]),
  password : new FormControl('' , [Validators.minLength(8) , Validators.required]),
});

  constructor(agentsService: AgentsService) {

    this.addAgent = new FormGroup({
      name : new FormControl('', [Validators.minLength(2) , Validators.required]),
      surname : new FormControl('' , [Validators.minLength(2), Validators.required ]),
      email : new FormControl('' , [Validators.email , Validators.required]),
      password : new FormControl('' , [Validators.minLength(8), Validators.required ]),
    });
  }

  ngOnInit() {
  }
  add() {
    console.log(this.addAgent
    );
  }
  cancelAdd() {
    if (this.i === 'none') {
      this.i = 'inline';
      this.p = 'none';
    } else {
      this.i = 'none';
      this.p = 'inline';
    }
  }
}
