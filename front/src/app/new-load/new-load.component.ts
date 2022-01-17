import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NewLoadService} from '../services/new-load.service';

@Component({
  selector: 'app-new-load',
  templateUrl: './new-load.component.html',
  styleUrls: ['./new-load.component.css']
})
export class NewLoadComponent implements OnInit {
  i = 0;
  newLoad = new FormGroup({
    customer: new FormGroup({
      name: new FormControl('' , [Validators.required]),
      mc: new FormControl('', [Validators.required]),
      referenceNumber: new FormControl('', [Validators.required]),
      rate: new FormControl('', [Validators.required]),
      contact: new FormControl('' , Validators.required)
    }),
    carrier: new FormGroup({
      name: new FormControl('' , [Validators.required]),
      mc: new FormControl('', [Validators.required]),
      rate: new FormControl('', [Validators.required]),
      contact: new FormControl('' , Validators.required)
    }),
    pickUp: new FormGroup({
      date: new FormControl('' , [Validators.required]),
      time: new FormControl('', [Validators.required]),
      name: new FormControl('' , [Validators.required]),
      address: new FormControl('' , [Validators.required]),
      city: new FormControl('' , [Validators.required]),
      zip: new FormControl('' , [Validators.required])
    }),
    delivery: new FormGroup({
      date: new FormControl('' , [Validators.required]),
      time: new FormControl('' , [Validators.required]),
      name: new FormControl('' , [Validators.required]),
      address: new FormControl('' , [Validators.required]),
      city: new FormControl('' , [Validators.required]),
      zip: new FormControl('' , [Validators.required])
    }),
    loadInfo: new FormGroup({
      weight: new FormControl('' , [Validators.required]),
      commodity: new FormControl('' , [Validators.required]),
      type: new FormControl('' , [Validators.required]),
      distance: new FormControl('' , [Validators.required])
    })
  });
  constructor(newLoadService: NewLoadService) {
  }

  ngOnInit() {
  }
  clearAll() {
    this.newLoad = new FormGroup({
      customer: new FormGroup({
        name: new FormControl('' , [Validators.required]),
        mc: new FormControl('', [Validators.required]),
        referenceNumber: new FormControl('', [Validators.required]),
        rate: new FormControl('', [Validators.required]),
        contact: new FormControl('' , Validators.required)
      }),
      carrier: new FormGroup({
        name: new FormControl('' , [Validators.required]),
        mc: new FormControl('', [Validators.required]),
        rate: new FormControl('', [Validators.required]),
        contact: new FormControl('' , Validators.required)
      }),
      pickUp: new FormGroup({
        date: new FormControl('' , [Validators.required]),
        time: new FormControl('', [Validators.required]),
        name: new FormControl('' , [Validators.required]),
        address: new FormControl('' , [Validators.required]),
        city: new FormControl('' , [Validators.required]),
        zip: new FormControl('' , [Validators.required])
      }),
      delivery: new FormGroup({
        date: new FormControl('' , [Validators.required]),
        time: new FormControl('' , [Validators.required]),
        name: new FormControl('' , [Validators.required]),
        address: new FormControl('' , [Validators.required]),
        city: new FormControl('' , [Validators.required]),
        zip: new FormControl('' , [Validators.required])
      }),
      loadInfo: new FormGroup({
        weight: new FormControl('' , [Validators.required]),
        commodity: new FormControl('' , [Validators.required]),
        type: new FormControl('' , [Validators.required]),
        distance: new FormControl('' , [Validators.required])
      })
    });
  }
}
