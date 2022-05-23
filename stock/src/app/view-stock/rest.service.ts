import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { company } from './company';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient,private datePipe: DatePipe) { }

  RegisterUser(companyCode:string,from:Date,to:Date):Observable<company>{
    return this.http.get<any>("http://localhost:8082/getcompany"+"/search?companyCode="+companyCode+"&from="+from+"&to="+to);
  //return this.http.get<any>("http://localhost:8082/getcompany/"+companyCode+from+to);
  
  }
  
}