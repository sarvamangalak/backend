import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './Flight';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  RegisterUser(data:any)
  {
  return this.http.post<any>("http://ec2-3-129-44-87.us-east-2.compute.amazonaws.com:8989/shows/api/flight/book",data)
  
  }
  
}