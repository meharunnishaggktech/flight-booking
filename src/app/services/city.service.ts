import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  configUrl = 'assets/city.json';

  constructor(private _http: HttpClient) { }

   /**
   *
   * @returns json
   */
  public viewCityService(): Observable<any>{

    return this._http.get(this.configUrl)
    .map((res:any) => res)
    .catch((error) => error);

  }
}
