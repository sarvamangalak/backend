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

  getFlight()
  {
  return this.http.get<any>("http://ec2-3-129-44-87.us-east-2.compute.amazonaws.com:8989/admin/api/flight/findFlights/Admin/Discount")
  .pipe(map((res:any)=>{
    return res;
  }))
  }
  
  postFlight(data:any)
  {
  return this.http.post<any>("http://ec2-3-129-44-87.us-east-2.compute.amazonaws.com:8989/admin/api/flight/findFlights/Admin/Discount",data)
  .pipe(map((res:any)=>{
    return res;
  }))
  }

  UpdateFlight(data:any ,id:number)
  {
  return this.http.put<any>("http://ec2-3-129-44-87.us-east-2.compute.amazonaws.com:8989/admin/api/flight/findFlights/Admin/Discount"+id,data)
  .pipe(map((res:any)=>{
    return res;
  }))
  }

  DeleteFlight(id:number)
  {
  return this.http.delete<any>("http://ec2-3-129-44-87.us-east-2.compute.amazonaws.com:8989/admin/api/flight/findFlights/Admin/Discount"+id)
  .pipe(map((res:any)=>{
    return res;
  }))
  }
}