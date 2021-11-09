import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-my-acount',
  templateUrl: './my-acount.component.html',
  styleUrls: ['./my-acount.component.css']
})
export class MyAcountComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
