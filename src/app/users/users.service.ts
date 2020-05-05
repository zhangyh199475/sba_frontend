import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS' });
  API_URL = '//localhost:8080/users';

  constructor(
    private http: HttpClient
  ) { }

  login(userName: string): Observable<any> {
    return this.http.get(this.API_URL + '/login/' + userName, { headers: this.headers, observe: 'response' });
  }

  getUsersList(): Observable<any> {
    return this.http.get(this.API_URL + '/getUsersList', { headers: this.headers, observe: 'response' });
  }

  addUser(info: any): Observable<any> {
    return this.http.post(this.API_URL + '/addUser', info, { headers: this.headers, observe: 'response', reportProgress: true });
  }

  updateUser(info: any): Observable<any> {
    return this.http.put(this.API_URL + '/updateUser', info, { headers: this.headers, observe: 'response', reportProgress: true });
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(this.API_URL + '/deleteUser/' + userId, { headers: this.headers, reportProgress: true });
  }
}
