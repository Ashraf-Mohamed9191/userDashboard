import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private _HttpClient:HttpClient) { }


  getUsers(pageNum:number = 1):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users?page=${pageNum}`);
  }


  getUserDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users/${id}`)
  }
}
