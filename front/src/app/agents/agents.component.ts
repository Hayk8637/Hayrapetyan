import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  i = 'inline';
  p = 'none';

addAgent = new FormGroup({
  name : new FormControl('', [Validators.minLength(2) ]),
  surname : new FormControl('' , [Validators.minLength(2) ]),
  email : new FormControl('' , [Validators.email ]),
  password : new FormControl('' , [Validators.minLength(8) ]),
});

  constructor() {

    this.addAgent = new FormGroup({
      name : new FormControl('', [Validators.minLength(2) ]),
      surname : new FormControl('' , [Validators.minLength(2) ]),
      email : new FormControl('' , [Validators.email ]),
      password : new FormControl('' , [Validators.minLength(8) ]),
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
