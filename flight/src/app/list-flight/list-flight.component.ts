import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
@Component({
  selector: 'app-list-flight',
  templateUrl: './list-flight.component.html',
  styleUrls: ['./list-flight.component.sass']
})
export class ListFlightComponent implements OnInit {

  formValue !:FormGroup;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue= this.formbuilder.group({
      Flight_Number:[''],
      Airline:[''],
      From:[''],
      To:[''],
      Depature:[''],
      Arrival:[''],
      Scheduled_Days:[''],
      Instrument:[''],
      Business_Class_Seats:[''],
      NonBusiness_Class_Seats:[''],
      Ticket_cost:['']
    })
  }

}
