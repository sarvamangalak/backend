import { Component, Input, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Search } from './Flight';
import{RestService} from'./rest.service';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  alert:boolean=false;
  Register=new FormGroup({
    From: new FormControl(''),
    To: new FormControl(''),
    Depature: new FormControl(''),
    Returning: new FormControl('')
  })
name="Airline Booking";
form:any;
formvalue !: FormGroup;
  UsersObj: Search= new Search();
  emplData !:any;
  constructor(private formbuilder:FormBuilder,
    private api:RestService,
    private router:Router,
    private route:ActivatedRoute) {
    this.form=new FormGroup(
      {
        From:new FormControl("",Validators.required),
        To:new FormControl("",Validators.required)
      }
    )
     
    
  }

  ngOnInit(): void {

  }
  collection()
  {
    this.api.RegisterUser(this.Register.value)
    .subscribe((result)=>
    {
      console.warn(result);
    })
  }

  navigat()
  
   {
     let data:any=this.form.value;
    this.router.navigate(['display'],{
      queryParams:{data:JSON.stringify(data)}
    });
  }

  
}
