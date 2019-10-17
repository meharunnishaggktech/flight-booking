import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from '../../services/city.service';
import { FlightDataService } from '../../services/flight-data.service';


@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  resultGroup : any = {};
  result:  any = {};
  cities:  Object[];
  flightsData: Object[];

  /**
 * AddsellersComponent constructor.
 *
 * @param formBuilder FormBuilder
 * @param _router Router
 * @param _cityService CityService
 */
constructor(private formBuilder: FormBuilder, private _router: Router, private _cityService : CityService, private _flightDataService : FlightDataService) {}

keyword = 'city';

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fromCity: ['', Validators.required],
      toCity: ['', Validators.required],
      departure: ['', [Validators.required, Validators.email]]
  });

  //get city data
  this._cityService.viewCityService().subscribe( response => {
    this.cities = response;
    console.log(this.cities);
  })

  }

  // convenience getter for easy access to form fields
 get user() { return this.registerForm.controls; }

 onSubmit() {

  this.submitted = true;
  var dateConverter = this.registerForm.value.departure;

  function convert(dateConverter) {
    var date = new Date(dateConverter),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [mnth, day, date.getFullYear()].join("/");
  }

  this._flightDataService.viewFlightService().subscribe(response => { 

    var resultFlightData = filterData(this.registerForm.value.fromCity, this.registerForm.value.toCity, convert(dateConverter));

    function filterData(locationName, toCity, travelDate) {
      return response.filter(object => {
        return object['fromCity'] == locationName && object['toCity'] == toCity && object['travelDate'] == travelDate;
      });
    }

    if(resultFlightData.length!=0) {
      this.flightsData = resultFlightData;
    }
    else {
      this.flightsData =  [{ status: "500", message: "No records found!" }]
      console.log(this.flightsData);
    }
  });
}
}
