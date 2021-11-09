import { Injectable } from '@angular/core';
import {RouterLink} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  user = {
    e: 'a@a',
    p: 'aaaaaaaa'
  };

  login(p) {
    this.isLoggedIn = true;
    return true;
  }


  logout(): boolean {
    this.isLoggedIn = false;
    return true;
  }
}
