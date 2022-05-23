import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  sub()
  {
   this.router.navigate(['app-add-stock'])
   
  }
  view()
  {
   this.router.navigate(['app-viewstockdate'])
   
  }
 
}
