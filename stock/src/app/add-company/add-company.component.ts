import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { RestService } from './rest.service';
import { company } from './company';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent  {
  alert:boolean=false;
  Register=new FormGroup({
    companyCode: new FormControl(''),
    companyName: new FormControl(''),
    ceo: new FormControl(''),
    website: new FormControl(''),
    stockExchange: new FormControl(''),
    turnOver: new FormControl('')
   
  })
  constructor(private router:Router,private route:ActivatedRoute,private api:RestService) {
   
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
  this.router.navigate(['app-company'])
  
 }

}
