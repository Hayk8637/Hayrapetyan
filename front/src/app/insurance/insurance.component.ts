import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  insurance = new FormGroup({
    insuranceProvider: new FormControl('' , [Validators.required]),
    loadId: new FormControl('' , [Validators.required]),
    email: new FormControl('', [Validators.email , Validators.required]),
    doc: new FormControl('', [Validators.required])
  });
  constructor() {
    this.insurance = new FormGroup({
      insuranceProvider: new FormControl('' , [Validators.required]),
      loadId: new FormControl('' , [Validators.required]),
      email: new FormControl('', [Validators.email , Validators.required]),
      doc: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

}
