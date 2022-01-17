import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PayrollService} from '../services/payroll.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {
  search = new FormGroup({
    search: new FormControl('' , [ Validators.required]),
  });
  constructor(payrollService: PayrollService) {
    this.search = new FormGroup({
      search: new FormControl('' , [ Validators.required]),
    });
  }

  ngOnInit() {
  }

}
