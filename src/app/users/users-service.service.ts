import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

constructor(
  private http: HttpClient
) { }

login(param?: any){
  return this.http.get('http://localhost:8080/users/login', {headers: this.headers, observe: 'response', params: param});
}

}
