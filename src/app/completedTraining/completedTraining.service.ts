import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompletedTrainingService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS' });
  API_URL = '//localhost:8080/trainings';

  constructor(
    private http: HttpClient
  ) { }

  searchCompletedTrainings(): Observable<any> {
    return this.http.get(this.API_URL + '/searchCompletedTrainings', { headers: this.headers, observe: 'response' });
  }
}
