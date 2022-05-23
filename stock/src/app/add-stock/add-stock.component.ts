import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import { Router ,ActivatedRoute} from '@angular/router';
import { RestService } from './rest.service';
import { company } from './company';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent  {
  alert:boolean=false;
  Register=new FormGroup({
    companyCode: new FormControl(''),
    price: new FormControl(''),
   
   
  })
  date= new Date();
 time = '';
 
  constructor(private router:Router,private route:ActivatedRoute,private api:RestService) {
    this.time = formatDate(this.date, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
 
  }
 
  collection()
  {
    this.api.RegisterUser(this.Register.value)
    .subscribe((result)=>
    {
      console.warn(result);
    })
  }
  sub()
 {
  alert("data saved");
  
 }

 add()
 {
  this.router.navigate(['app-stock'])
  
 }

 
}
