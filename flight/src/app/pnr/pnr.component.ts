import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import{Booking} from './Flight'
import { RestService } from './rest.service';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as fileSaver from 'file-saver';
@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.scss']
})
export class PnrComponent implements OnInit {
 
  emplData !:any;
  From!:string;

  alert:boolean=false;
  Register=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    Nu_Seats: new FormControl(''),
    SelectSeats: new FormControl(''),
    From: new FormControl(''),
    To: new FormControl(''),
    id:new FormControl('')
  })
  result:any = {};
  constructor(private router:Router,
    private route:ActivatedRoute,private api:RestService) {

     }

  ngOnInit(){this.getallemplyes();
  }
  loadUserById(id: string){
    this.api.getUserById(id)
    .subscribe((res:any)=>{
        console.log(res)
        this.result = res;
      
        
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

  getallemplyes()
  {
    this.api.RegisterUser()
    .subscribe(res=>{
      this.emplData=res;
    })
  }

  download()
  {
    this.router.navigate(['app-ticketview'])
   
  }
  
}
