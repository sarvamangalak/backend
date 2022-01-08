import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Coupon } from './Flight';
import { RestService } from './rest.service';
import { SelectorMatcher } from '@angular/compiler';
import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {

  formvalue !: FormGroup;
  UsersObj: Coupon= new Coupon();
  emplData !:any;


  constructor(private formbuilder:FormBuilder,
    private api:RestService,private router:Router
    ){

  }
  ngOnInit(): void {

    this.formvalue=this.formbuilder.group({
      id:[''],
      couponCode:[''],
      discount:[''],
           
    })
    this.getallemplyes();
   //this.DeleteEmployee(id);
  }
  
 
  postFlightDetails()
  {
    this.UsersObj.id=this.formvalue.value.id;
    this.UsersObj.couponCode=this.formvalue.value.couponCode;
    this.UsersObj.discount=this.formvalue.value.discount;

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
    this.formvalue.controls['couponCode'].setValue(row.couponCode);
    this.formvalue.controls['discount'].setValue(row.discount);
  
    
  }

  updateFlightdetails()
  {
    this.UsersObj.id=this.formvalue.value.id;
    this.UsersObj.couponCode=this.formvalue.value.couponCode;
    this.UsersObj.discount=this.formvalue.value.discount;
    
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
    this.router.navigate(['register']);
  }
}

