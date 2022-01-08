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
url="http://ec2-3-129-44-87.us-east-2.compute.amazonaws.com:8989/shows/api/flight/book";
  getUserById(){
    return this.http.get(this.url);
  }
}