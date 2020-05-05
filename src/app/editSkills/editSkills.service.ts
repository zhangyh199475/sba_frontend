import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EditSkillsService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS' });
  API_URL = '//localhost:8080/mentorSkills';

  constructor(
    private http: HttpClient
  ) { }

  searchSkills(): Observable<any> {
    return this.http.get(this.API_URL + '/searchSkills', { headers: this.headers, observe: 'response' });
  }

  
  addSkills(info: any):  Observable<any> {
    return this.http.post(this.API_URL + '/addSkills', info, { headers: this.headers, observe: 'response', reportProgress: true });
  }

  updateSkills(info: any): Observable<any> {
    return this.http.put(this.API_URL + '/updateSkills', info, { headers: this.headers, observe: 'response', reportProgress: true });
  }

  deleteSkills(info: any): Observable<any> {
    return this.http.delete(this.API_URL + '/deleteSkills/' + info, { headers: this.headers, reportProgress: true });
  }

}
