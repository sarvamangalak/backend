import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Coupon } from './Flight';
import { RestService } from './rest.service';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  CouponCode:string="";
  Discount:string="";

  emplData !:any;
  name:string="";
  card:string="";
  ccv:string ="";
  
  UsersObj: Coupon= new Coupon();
  formvalue !: FormGroup;
  constructor(private router:Router, private api:RestService,private formbuilder:FormBuilder,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.formvalue=this.formbuilder.group({
      Coupon:['']
           
    }) 
   
  }
PNR()
{
  alert("Booked succesfully,PNR number has been generated : ezrMZEJ");
}
Coupon(id: string)

{  


this.api.getFlight(id)
.subscribe(res=>{
  console.log(res)
  this.emplData=res;

 
})
}
  user()
  {
    
      this.router.navigate(['app-downloadticket']);
    
  }

 
}
