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

  RegisterUser(data:any){

  return this.http.post<any>("http://localhost:8082/post",data)
  
  }
  
}