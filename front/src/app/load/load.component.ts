import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  load = new FormGroup({
    search: new FormControl('' , [ Validators.required ])
  });
  constructor() {
    this.load = new FormGroup({
      search: new FormControl('' , [ Validators.required ])
    });
  }

  ngOnInit() {
  }

}
