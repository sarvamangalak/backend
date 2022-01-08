import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import{Booking} from './Flight'
import { RestService } from './rest.service';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {

  
  alert:boolean=false;
  Register=new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    no_Seats: new FormControl(''),
    select_Seats: new FormControl(''),
    departureCity: new FormControl(''),
    arrivalCity: new FormControl('')
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
  add()
  {
    this.router.navigate(['app-add-passenger'])
  }
}
