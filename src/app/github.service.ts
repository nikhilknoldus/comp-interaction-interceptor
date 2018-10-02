import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _http:HttpClient) { }
  isLoading;

  getUserData(){
    this.isLoading=true;
    return this._http.get("http://api.github.com/users/random");
  }
  getUserData2(){
    this.isLoading=true;
    return this._http.get("http://api.github.com/users/nikhilknoldus").pipe(map(res => res))
  }

}
