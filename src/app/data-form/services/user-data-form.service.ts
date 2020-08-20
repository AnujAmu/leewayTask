import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-data-form/user-data-form.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataFormService {

  constructor(private _http: HttpClient) { }

  // pushData(user: User){
  //   return this._http.post<any>('http://localhost:4000/person', user);
  // }

  create(user: User) {
    return this._http.post('http://localhost:4000/person', user);
  }
}