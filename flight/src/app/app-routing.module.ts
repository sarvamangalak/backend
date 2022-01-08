import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { DisplayComponent } from './display/display.component';
import { RegisterComponent } from './register/register.component';
import{AddListComponent} from './add-list/add-list.component';
import {NewUserComponent} from './new-user/new-user.component';
import {BookFlightComponent} from './book-flight/book-flight.component';
import{AddPassengerComponent} from './add-passenger/add-passenger.component';
import{PaymentComponent} from './payment/payment.component';
import{DownloadticketComponent} from './downloadticket/downloadticket.component';
import{PnrComponent} from './pnr/pnr.component';
import{TicketviewComponent} from './ticketview/ticketview.component';
import{CancellationComponent} from './cancellation/cancellation.component';
import { LogoutComponent } from './logout/logout.component';
import { CouponComponent } from './coupon/coupon.component';
const routes: Routes = [

    {path:'register',component:RegisterComponent},
    {path:'app-new-user',component:NewUserComponent},
    {path:'search',component:SearchComponent},
    {path:'display',component:DisplayComponent},
    {path:'app-add-list',component:AddListComponent},
    {path: 'app-book-flight',component:BookFlightComponent},
    {path:'app-add-passenger',component:AddPassengerComponent},
    {path:'app-payment',component:PaymentComponent},
    {path:'app-downloadticket',component:DownloadticketComponent},
    {path:'app-pnr',component:PnrComponent},
    {path:'app-ticketview',component:TicketviewComponent},
    {path:'app-cancellation',component:CancellationComponent},
    {path:'app-logout',component:LogoutComponent},
    {path:'app-coupon',component:CouponComponent}

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
