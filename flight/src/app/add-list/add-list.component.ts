import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Flight } from './Flight';
import { RestService } from './rest.service';
import { SelectorMatcher } from '@angular/compiler';

import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  
  formvalue !: FormGroup;
  UsersObj: Flight= new Flight();
  emplData !:any;


  constructor(private formbuilder:FormBuilder,
    private api:RestService,private router:Router
    ){

  }
  ngOnInit(): void {

    this.formvalue=this.formbuilder.group({
      id:[''],
      flightNumber:[''],
      airline:[''],
      departureCity:[''],
      arrivalCity:[''],
      dayDeparture:[''],
      estimatedDeparture:[''],
      business_Class:[''],
      nonBusiness_Class:[''],
      ticket_cost:['']
           
    })
    this.getallemplyes();
   //this.DeleteEmployee(id);
  }
  
 
  postFlightDetails()
  {
    this.UsersObj.id=this.formvalue.value.id;
    this.UsersObj.flightNumber=this.formvalue.value.flightNumber;
    this.UsersObj.airline=this.formvalue.value.airline;
    this.UsersObj.departureCity=this.formvalue.value.departureCity;
    this.UsersObj.arrivalCity=this.formvalue.value.arrivalCity;
    this.UsersObj.dayDeparture=this.formvalue.value.dayDeparture;
    this.UsersObj.estimatedDeparture=this.formvalue.value.estimatedDeparture;
    this.UsersObj.business_Class=this.formvalue.value.business_Class;
    this.UsersObj.nonBusiness_Class=this.formvalue.value.nonBusiness_Class;
    this.UsersObj.ticket_cost=this.formvalue.value.ticket_cost;

    this.api.postFlight(this.UsersObj)
    .subscribe(res=>{
      console.log(res);
      alert("flight added succesfuly")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formvalue.reset();
      this.getallemplyes();
      
    },
    err=>{alert("please, check the details");}
    
    )
  }
    
  getallemplyes()
  {
    this.api.getFlight()
    .subscribe(res=>{
      this.emplData=res;
    })
  }
  
  deleteFlight(row:any)
  {
    this.api.DeleteFlight(row.id)
    .subscribe(res=>{
      alert("Flight details deleted");
      this.getallemplyes();
    })
  }
  onEdit(row:any)
  {
   this.UsersObj.id=row.id;
    this.formvalue.controls['id'].setValue(row.id);
    this.formvalue.controls['flightNumber'].setValue(row.flightNumber);
     this.formvalue.controls['airline'].setValue(row.airline);
    this.formvalue.controls['departureCity'].setValue(row.departureCity);
    this.formvalue.controls['arrivalCity'].setValue(row.arrivalCity);
    this.formvalue.controls['dayDeparture'].setValue(row.dayDeparture);
    this.formvalue.controls['estimatedDeparture'].setValue(row.estimatedDeparture);
    this.formvalue.controls['business_Class'].setValue(row.business_Class);
    this.formvalue.controls['nonBusiness_Class'].setValue(row.nonBusiness_Class);
    this.formvalue.controls['ticket_cost'].setValue(row.ticket_cost);
  
    
  }

  updateFlightdetails()
  {
    this.UsersObj.id=this.formvalue.value.id;
    this.UsersObj.flightNumber=this.formvalue.value.flightNumber;
    this.UsersObj.airline=this.formvalue.value.airline;
    this.UsersObj.departureCity=this.formvalue.value.departureCity;
    this.UsersObj.arrivalCity=this.formvalue.value.arrivalCity;
    this.UsersObj.dayDeparture=this.formvalue.value.dayDeparture;
    this.UsersObj.estimatedDeparture=this.formvalue.value.estimatedDeparture;
    this.UsersObj.business_Class=this.formvalue.value.business_Class;
    this.UsersObj.nonBusiness_Class=this.formvalue.value.nonBusiness_Class;
    this.UsersObj.ticket_cost=this.formvalue.value.ticket_cost;
    
    this.api.UpdateFlight(this.UsersObj,this.UsersObj.id)
    .subscribe(res=>
      {
        alert("updated data");
        let ref=document.getElementById('cancel')
        ref?.click();
        this.formvalue.reset();
        this.getallemplyes();
      })
  }

  logout()
  {
    this.router.navigate(['app-coupon']);
  }
}
