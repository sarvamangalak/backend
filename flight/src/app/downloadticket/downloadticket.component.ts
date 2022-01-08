import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import{Booking} from './Flight'
import { RestService } from './rest.service';
@Component({
  selector: 'app-downloadticket',
  templateUrl: './downloadticket.component.html',
  styleUrls: ['./downloadticket.component.scss']
})
export class DownloadticketComponent implements OnInit {
  date = new Date();
  codeGenerated = '';
  evtMsg: any;
  emplData !:any;
  email!:string;
  alert:boolean=false;
  Register=new FormGroup({
    Pnr: new FormControl('')
  })
  
  result:any = {};
  constructor(private router:Router,private api:RestService) { }

  ngOnInit(): void {this.getallemplyes();
  }
  
      
          


getallemplyes()
  {
    this.api.getUserById()
    .subscribe(res=>{
      this.emplData=res;
    })
  }
Search()
  {
if(this.email=="")
{
  this.ngOnInit();

}
else
{
  this.emplData=this.emplData.filter((res: { email: string; })=>
   {
     return res.email.toLocaleLowerCase().match(this.email.toLocaleLowerCase());
   })
}
}
   history()
   {
     this.router.navigate(['app-ticketview']);
   }
}
