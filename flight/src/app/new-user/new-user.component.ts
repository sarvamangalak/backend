import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import{Users} from './Flight'
import { RestService } from './rest.service';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  alert:boolean=false;
  Register=new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
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
    alert("User Added Successfully");
  }
  Previous()
  {
    this.router.navigate(['register']);
  }
}
