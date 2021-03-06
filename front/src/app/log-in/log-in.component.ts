import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { LogInService } from '../services/log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logIn = new FormGroup({
    email: new FormControl('' , [Validators.email , Validators.required]),
    password: new FormControl('' , [Validators.required , Validators.minLength(8)]),
  });
  constructor(public authService: AuthService , public logInService: LogInService) {
    this.logIn = new FormGroup({
      email: new FormControl('' , [Validators.email , Validators.required]),
      password: new FormControl('' , [Validators.required , Validators.minLength(8)]),
    });
  }

  ngOnInit() {
  }

  LogIn(logIn) {
    this.authService.LogIn(this.logInService.LogIn(logIn.value));
  }
}
