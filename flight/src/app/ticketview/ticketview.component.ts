import { Component, ViewChild,ElementRef,OnInit } from '@angular/core';
import {jsPDF} from 'jspdf';
import {ExportAsService ,ExportAsConfig} from 'ngx-export-as';
import { saveAs } from 'file-saver';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Router, ActivatedRoute } from '@angular/router';
import { RestService } from './rest.service';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { Booking } from './Flight';
@Component({
  selector: 'app-ticketview',
  templateUrl: './ticketview.component.html',
  styleUrls: ['./ticketview.component.scss']
})
export class TicketviewComponent  implements OnInit {
  emplData !:any;
  From!:string;
  UsersObj: Booking= new Booking();
  alert:boolean=false;
  Register=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    Nu_Seats: new FormControl(''),
    SelectSeats: new FormControl(''),
    From: new FormControl(''),
    To: new FormControl(''),id: new FormControl('')
  })
  constructor(private Router:Router,
    private api:RestService,
    private http : HttpClient) {
    }
    ngOnInit(){this.getallemplyes();
    }
    getallemplyes()
{
 this.api.RegisterUser()
 .subscribe(res=>{
   this.emplData=res;
 })
}
  @ViewChild('content',{static:false}) el!:ElementRef;
  downloadPDF()
  {
    let pdf =new jsPDF();
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("ticket.pdf");
      }
    })
    
  }
  next()
  {
    alert("Ticket cancelled");
    this.api.CancelUser(this.UsersObj)
    .subscribe(res=>{
     
      this.getallemplyes();
      alert("Ticket cancelled");
    })
  }

  logout()
  {
    this.Router.navigate(['register']);
  }
} 