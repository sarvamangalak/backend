import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  

  email:string="";
  password:string="";

  constructor(private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  login()
  {
    if(this.email=="admin@gmail.com" && this.password=="admin123$")
    {
      this.router.navigate(['app-add-list']);
    }
    else
    {
      alert("Please Enter Valid Deatils");
    }
  }

  user()
  {
    
      this.router.navigate(['search']);
    
   
  }

  newDetail()
  {
    this.router.navigate(['app-new-user']);
  }
}
