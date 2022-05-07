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

}

// https://routeegypt.herouapp.com/getAllUsers
