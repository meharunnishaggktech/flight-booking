import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FlightDataService } from '../../services/flight-data.service';
import { Flights } from '../../models/flights/flights.model';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  flightsData : Flights[];
  firstName: string = "Mehar";
  lastName: string = "Nisha";
  email: string = "mehar@gmail.com";
  airline_name:string;
  duration: string;
  flight_number: string;
  fromCity: string;
  logo: string;
  noofstops: number;
  price:number;
  toCity:string;
  travelDate:string;

  constructor(private formBuilder: FormBuilder,private _router: Router,private _route: ActivatedRoute,private _flightDataService : FlightDataService) { }

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      LastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required]
  });

  //get flight data
  this._flightDataService.getFlightDetailsService().subscribe( response => {
    var flightId =  this._route.snapshot.paramMap.get('id');;
    var resultFlightData = filterData(flightId);


    function filterData(flightId) {
      return response.filter(object => {
        return object['id'] == flightId ;
      });
    }if(resultFlightData.length!=0) {
      this.flightsData = resultFlightData;
      if(resultFlightData){
        this.airline_name = resultFlightData[0].airline_name;
        this.flight_number = resultFlightData[0].flight_number;
        this.duration = resultFlightData[0].duration;
        this.fromCity = resultFlightData[0].fromCity;
        this.toCity = resultFlightData[0].toCity;
        this.price = resultFlightData[0].price;
     }
    }
  })
  }

   // convenience getter for easy access to form fields
 get user() { return this.userForm.controls; }

 onSubmit() {

  this.submitted = true;
  // stop here if form is invalid
  if (this.userForm.invalid) {
      return;
  }

  this._router.navigateByUrl('/confirm-ticket');
}


}
