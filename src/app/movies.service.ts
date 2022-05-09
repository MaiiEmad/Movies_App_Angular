import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

constructor(private _HttpClient:HttpClient) { }


// pass movies or tv  in this parameter mediaType
getTrending(mediaType: any):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=fd81075ebd952126de40b7030267c1df`);

}

}
