import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  sub()
  {
   this.router.navigate(['app-add-company'])
   
  }
  view()
  {
   this.router.navigate(['app-view-company'])
   
  }
  del()
  {
   this.router.navigate(['app-del-company'])
   
  }
  stock()
  {
    this.router.navigate(['app-stock'])
    
   }
  
}
