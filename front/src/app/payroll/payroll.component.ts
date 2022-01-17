import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {
  search = new FormGroup({
    search: new FormControl('' , [ Validators.required]),
  });
  constructor() {
    this.search = new FormGroup({
      search: new FormControl('' , [ Validators.required]),
    });
  }

  ngOnInit() {
  }

}
