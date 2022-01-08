import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DisplayComponent } from './display/display.component';
import {ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{RestService} from './add-list/rest.service';
import { AddListComponent } from './add-list/add-list.component';
import { ListFlightComponent } from './list-flight/list-flight.component';
import { NewUserComponent } from './new-user/new-user.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { PaymentComponent } from './payment/payment.component';
import { PnrComponent } from './pnr/pnr.component';
import { DownloadticketComponent } from './downloadticket/downloadticket.component';
import { TicketviewComponent } from './ticketview/ticketview.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { LogoutComponent } from './logout/logout.component';
import { CouponComponent } from './coupon/coupon.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayComponent,
    RegisterComponent,
    AddListComponent,
    ListFlightComponent,
    NewUserComponent,
    BookFlightComponent,
    AddPassengerComponent,
    PaymentComponent,
    PnrComponent,
    DownloadticketComponent,
    TicketviewComponent,
    CancellationComponent,
    LogoutComponent,
    CouponComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule
    
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
