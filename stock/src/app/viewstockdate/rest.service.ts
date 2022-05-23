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

  // RegisterUser(companyCode:string,from:Date,to:Date):Observable<company>{
  //   return this.http.get<any>("http://localhost:8082/getcompany"+"/search?companyCode="+companyCode+"&from="+from+"&to="+to);
 
  // }
  
  RegisterUser():Observable<company>{
    return this.http.get<any>("http://localhost:7123/stockdata/getcompanycode");
 
  }
  Price():Observable<company>{
    return this.http.get<any>("http://localhost:7123/stockdata/getcompanycode");
 
  }
  
}