import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component'
import { LoginPageComponent} from './login-page/login-page.component'
import { CompanyComponent} from './company/company.component'
import { AddCompanyComponent } from './add-company/add-company.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { DelCompanyComponent } from './del-company/del-company.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { ViewStockComponent } from './view-stock/view-stock.component';
import { StockComponent } from './stock/stock.component';
import { ViewstockdateComponent } from './viewstockdate/viewstockdate.component';
const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:"app-login-page", component:LoginPageComponent},
  {path:"app-company", component:CompanyComponent},
  {path:"app-add-company", component:AddCompanyComponent},
  {path:"app-view-company", component:ViewCompanyComponent},
  {path:"app-del-company", component:DelCompanyComponent},
  {path:"app-add-stock", component:AddStockComponent},
  {path:"app-view-stock", component:ViewStockComponent},
  {path:"app-stock", component:StockComponent},
  {path:"app-viewstockdate", component:ViewstockdateComponent},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
