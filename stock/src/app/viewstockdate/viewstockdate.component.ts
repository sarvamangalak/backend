import { Component, OnInit } from '@angular/core';

import { Router ,ActivatedRoute} from '@angular/router';
import { RestService } from './rest.service';
import { company } from './company';
import { DatePipe, getLocaleDateFormat } from '@angular/common';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-viewstockdate',
  templateUrl: './viewstockdate.component.html',
  styleUrls: ['./viewstockdate.component.scss']
})
export class ViewstockdateComponent implements OnInit {
  emplData !:any;
  company:any={};
  from!:any;
  to!:any;
  companyCode="";
  alert:boolean=false;
  Register=new FormGroup({
    companyCode: new FormControl(''),
   price: new FormControl('')
  })
  constructor(private router:Router,private route:ActivatedRoute,private api:RestService,private datePipe: DatePipe) {
   
  }
  ngOnInit(): void {
    this.from = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.to = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }
 
  collection(companyCode:string,from:Date,to:Date)
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

 add()
 {
  this.router.navigate(['app-company'])
  
 }

 filterPrice()
 {
  this.api.Price()
  .subscribe(data=>
  {
    this.company=data;
  })
}

}


function companyCode(companyCode: any, from: any, to: any) {
  throw new Error('Function not implemented.');
}

function from(companyCode: any, from: any, to: any) {
  throw new Error('Function not implemented.');
}

function to(companyCode: any, from: any, to: any) {
  throw new Error('Function not implemented.');
}

