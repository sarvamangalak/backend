import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { company } from './company';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  RegisterUser():Observable<company>{

  return this.http.get<company>("http://localhost:8083/get");
  
  }
  DeleteFlight(companyCode:number)
  {
  return this.http.delete<any>("http://localhost:8083/delete/"+companyCode)
  .pipe(map((res:any)=>{
    return res;
  }))
  }
}