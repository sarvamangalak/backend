import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Flight } from './Flight';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  getFlight()
  {
  return this.http.get<any>("http://ec2-3-129-44-87.us-east-2.compute.amazonaws.com:8989/shows/api/flight/findFlights/search");
  }

  

  
}