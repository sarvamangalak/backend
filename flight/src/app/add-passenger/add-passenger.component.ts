import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import{Passenger} from './Flight'
import { RestService } from './rest.service';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.scss']
})
export class AddPassengerComponent implements OnInit {

  
  
  alert:boolean=false;
  Register=new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
    meal: new FormControl(''),
   
  })
  constructor(private router:Router,
    private route:ActivatedRoute,private api:RestService) {

     }

  ngOnInit(){
  }
  collection()
  {
    this.api.RegisterUser(this.Register.value)
    .subscribe((result)=>
    {
      console.warn(result);
    })
  }

  closeAlert()
  {
this.alert=false;

  }
  done()
  {
    alert("Details Added Successfully");
  }

 sub()
 {
  this.router.navigate(['app-payment'])
  
 }

 
}
