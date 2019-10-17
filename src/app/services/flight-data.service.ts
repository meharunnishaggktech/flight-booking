import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {

  configUrl = 'assets/flight_result.json';

  constructor(private _http: HttpClient) { }

  /**
   *
   * @returns json
   */
  public viewFlightService(): Observable<any>{

    return this._http.get(this.configUrl,
    {
    })
    
  }
  

  public getFlightDetailsService(): Observable<any>{

    return this._http.get(this.configUrl,
    {
      
    })
    
  }
}
