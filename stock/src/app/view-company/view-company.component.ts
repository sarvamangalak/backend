import { Component, OnInit } from '@angular/core';

import { Router ,ActivatedRoute} from '@angular/router';
import { RestService } from './rest.service';
import { company } from './company';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.scss']
})
export class ViewCompanyComponent implements OnInit {

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

 add()
 {
  this.router.navigate(['app-company'])
  
 }

 

}

