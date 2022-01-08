import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from './Flight';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }
url="http://ec2-3-129-44-87.us-east-2.compute.amazonaws.com:8989/admin/api/flight/findFlights/Admin/Discount";
  getFlight(id:string){
    return this.http.get(this.url+"/"+id)
  }
 
}