import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { GeneralService } from './general.service';
import { City, Town, District, Street } from '../data/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends GeneralService {

  constructor(private http: HttpClient, private auth: AuthenticationService) {
    super(http, auth);
  }

  public getCities(): Promise<City[]> {
    const url = `${this.apiBaseUrl}/locations`;
    return this.http
      .get(url, this.getHeaders())
      .toPromise()
      .then(response => response as City[])
      .catch(this.handleError);
  }

  public getTowns(city): Promise<Town[]> {
    const url = `${this.apiBaseUrl}/locations/towns/${city}`;
    return this.http
      .get(url, this.getHeaders())
      .toPromise()
      .then(response => response as Town[])
      .catch(this.handleError);
  }

  public getDistricts(town): Promise<District[]> {
    const url = `${this.apiBaseUrl}/locations/districts/${town}`;
    return this.http
      .get(url, this.getHeaders())
      .toPromise()
      .then(response => response as District[])
      .catch(this.handleError);
  }

  public getStreets(district): Promise<Street[]> {
    const url = `${this.apiBaseUrl}/locations/streets/${district}`;
    return this.http
      .get(url, this.getHeaders())
      .toPromise()
      .then(response => response as Street[])
      .catch(this.handleError);
  }

}
