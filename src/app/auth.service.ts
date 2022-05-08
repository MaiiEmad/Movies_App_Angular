import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private _HttpClient:HttpClient) { }

register(registerFormValue: any):Observable<any>
{
  return this._HttpClient.post('https://routeegypt.herokuapp.com/signup',registerFormValue)
}

// كدا عامل ميثود اسمها لوجن..هبعتلك البيانات للي في اللوجن فورم و انت تبعتها لليو ار ال دا
login(loginFormValue: any):Observable<any>
{
  return this._HttpClient.post('https://routeegypt.herokuapp.com/signin',loginFormValue)
}

}

// https://routeegypt.herouapp.com/getAllUsers
