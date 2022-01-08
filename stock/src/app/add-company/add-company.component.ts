import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  sub()
 {
  this.router.navigate(['app-view-company'])
  
 }
}
