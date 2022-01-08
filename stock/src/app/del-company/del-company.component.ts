import { Component, OnInit } from '@angular/core';

import { Router ,ActivatedRoute} from '@angular/router';
import { RestService } from './rest.service';
import { company } from './company';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-del-company',
  templateUrl: './del-company.component.html',
  styleUrls: ['./del-company.component.scss']
})
export class DelCompanyComponent implements OnInit {



  emplData !:any;
  From!:string;
  company!:any;
  alert:boolean=false;
  Register=new FormGroup({
    companyCode: new FormControl(''),
    companyName: new FormControl(''),
    ceo: new FormControl(''),
    website: new FormControl(''),
    stockExchange: new FormControl(''),
    turnOver: new FormControl(''),price: new FormControl('')
  })
  constructor(private router:Router,private route:ActivatedRoute,private api:RestService) {
   
  }
  ngOnInit(): void {
  this.collection();
  }
 
  collection()
  {
    this.api.RegisterUser()
    .subscribe(data=>
    {
      this.company=data;
    })
  }
  sub()
 {
  alert("data saved");
  
 }
 deleteFlight(row:any)
 {
   this.api.DeleteFlight(row.companyCode)
   .subscribe(res=>{
     alert("Company details deleted");
     this.collection();
   })
 }
 add()
 {
  this.router.navigate(['app-company'])
  
 }

 

}


