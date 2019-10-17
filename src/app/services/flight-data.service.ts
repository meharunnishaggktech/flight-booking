import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {

  configUrl = 'assets/flight_result.json';
  error : any;

  constructor(private _http: HttpClient) {
   }

  /**
   *
   * @returns json
   */
  public viewFlightService(): Observable<any>{

    return this._http.get(this.configUrl)
    .map((res:any) => res)
    .catch((error) => error);

  }


  public getFlightDetailsService(): Observable<any>{

    return this._http.get(this.configUrl)
            .map((res:any) => res)
            .catch((error) => error);

  }
}
