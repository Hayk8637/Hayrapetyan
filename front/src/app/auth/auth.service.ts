import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {RouterLink} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;


  LogIn(s) {
    if ( s === true ){
     this.isLoggedIn = true;
    }
  }


  logOut(): boolean {
    this.isLoggedIn = false;
    return true;
  }
}
