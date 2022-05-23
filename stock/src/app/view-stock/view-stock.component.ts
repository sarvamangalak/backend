import { Component, OnInit } from '@angular/core';


import { Router ,ActivatedRoute} from '@angular/router';
import { RestService } from './rest.service';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { DatePipe, getLocaleDateFormat } from '@angular/common';
@Component({
  selector: 'app-view-stock',
  templateUrl: './view-stock.component.html',
  styleUrls: ['./view-stock.component.scss']
})
export class ViewStockComponent implements OnInit {

  emplData !:any;
  from!:any;
  to!:any;
  companyCode="";
  company:any={};
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
    this.api.RegisterUser(companyCode,from,to)
    .subscribe((res:any)=>
    {
      this.company=res;
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

 next()
 {
  this.router.navigate(['app-viewstockdate'])
  
 }

}



