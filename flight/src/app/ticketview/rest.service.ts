import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Booking } from './Flight';
import { cancel } from './cancel';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  
  constructor(private http : HttpClient) { }

  RegisterUser()
  {
  return this.http.get<any>("http://ec2-3-129-44-87.us-east-2.compute.amazonaws.com:8989/shows/api/flight/book")
  
  }

  CancelUser(data:any)
  {
  return this.http.post<any>("http://ec2-3-129-44-87.us-east-2.compute.amazonaws.com:8989/shows/api/flight/cancel/",data)
  
  }
  
  
  

  
}