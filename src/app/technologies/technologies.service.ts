import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS' });
  API_URL = '//localhost:8080/technologies';
constructor(
  private http: HttpClient

) { }

searchTechnologies(): Observable<any> {
  return this.http.get(this.API_URL + '/searchTechnologies', { headers: this.headers, observe: 'response' });
}

addTechnologies(info: any):  Observable<any> {
  return this.http.post(this.API_URL + '/addTechnologies', info, { headers: this.headers, observe: 'response', reportProgress: true });
}

updateTechnologies(info: any): Observable<any> {
  return this.http.put(this.API_URL + '/updateTechnologies', info, { headers: this.headers, observe: 'response', reportProgress: true });
}

deleteTechnologies(techId: number): Observable<any> {
  return this.http.delete(this.API_URL + '/deleteTechnologies/' + techId, { headers: this.headers, reportProgress: true });
}

}
