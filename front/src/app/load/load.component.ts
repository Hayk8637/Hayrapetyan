import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup , Validators } from '@angular/forms';
import {LoadService} from '../services/load.service';
import {Load} from '../../interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  load = new FormGroup({
    search: new FormControl('' , [ Validators.required ])
  });
  constructor(loadService: LoadService) {
    this.load = new FormGroup({
      search: new FormControl('' , [ Validators.required ])
    });
    console.log(loadService.getLoads());
  }

  ngOnInit() {
  }

}
