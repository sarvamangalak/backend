import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { Flight } from './Flight';
import { RestService } from './rest.service';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  Flight:Flight[]=[];
  formvalue !: FormGroup;
  //UsersObj: Flight= new Flight();
  emplData !:any;
  departureCity!:string;

  constructor(private formbuilder:FormBuilder,private Router:Router,
    private api:RestService
    ){

  }
  ngOnInit(): void {

    
    this.getallemplyes();
   
  }
  
 
  
    
  getallemplyes()
  {
    this.api.getFlight()
    .subscribe(res=>{
      this.emplData=res;
    })
  }
  
  Search()
  {
    //this.emplData=this.emplData.filter((res: { From: string; })=>
   //   {
   // return res.From.toLocaleLowerCase().match(this.From.toLocaleLowerCase());
   //   })

   if(this.departureCity=="")
   {
     this.ngOnInit();

   }
   else
   {
     this.emplData=this.emplData.filter((res: { departureCity: string; })=>
      {
        return res.departureCity.toLocaleLowerCase().match(this.departureCity.toLocaleLowerCase());
      })
   }
  }

  next()
  {
    this.Router.navigate(['app-book-flight'])
   
  }
}

