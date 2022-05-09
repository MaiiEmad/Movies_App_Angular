import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// to update property.. use behavior subject
import { Observable, BehaviorSubject } from 'rxjs';
import { UserData } from './userData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // have user info that recently login to the system
  // from this property .. i know user login or not.. i will use it to control what the user will see in the system
  currentUsers = new BehaviorSubject<any>(null);



  constructor(private _HttpClient: HttpClient , private _Router:Router) {

       if(localStorage.getItem('userData')!= null){
           this.currentUsers.next(JSON.parse(localStorage.getItem('userData')|| '{}'));
       }


  }

  register(registerFormValue: any): Observable<any> {
    return this._HttpClient.post(
      'https://routeegypt.herokuapp.com/signup',
      registerFormValue
    );
  }

  // كدا عامل ميثود اسمها لوجن..هبعتلك البيانات للي في اللوجن فورم و انت تبعتها لليو ار ال دا
  login(loginFormValue: any): Observable<any> {
    return this._HttpClient.post(
      'https://routeegypt.herokuapp.com/signin',
      loginFormValue
    );
  }
  // https://routeegypt.herouapp.com/getAllUsers

  logOut(){
    this.currentUsers.next(null);
    localStorage.setItem('userData', null || '{}');
    this._Router.navigate(['/login']);
  }

  // i make object of class userData in this function
  saveCurrentUser(first_name: any, last_name: any, email: any, token: any) {
    let user = new UserData(first_name, last_name, email, token);
    // this.currentUsers =user;

    // this is used to save user login data
    localStorage.setItem('userData',JSON.stringify(user));
    this.currentUsers.next(user);
    console.log(this.currentUsers);
  }
}
