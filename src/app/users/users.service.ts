import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS'});
  API_URL = '//localhost:8080/users'

  constructor(
    private http: HttpClient
  ) { }

  login(userName: string): Observable<any> {
    return this.http.get(this.API_URL + '/login/' + userName, { headers: this.headers, observe: 'response'});
  }

}
