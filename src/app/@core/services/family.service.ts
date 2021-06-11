import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Family } from '../data/family';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from './authentication.service';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyService extends GeneralService {

  constructor(private http: HttpClient, private auth: AuthenticationService) {
    super(http, auth);
  }

  public getFamilies(): Promise<Family[]> {
    const url = `${this.apiBaseUrl}/admin/families`;
    return this.http
      .get(url, this.getHeaders())
      .toPromise()
      .then(response => response as Family[])
      .catch(this.handleError);
  }

  // public createFamily(family: Family): Promise<Family> {
  //   const url = `${this.apiBaseUrl}/families`;
  //   return this.http
  //     .post(url, family, this.getHeaders())
  //     .toPromise()
  //     .then(response => response as Family)
  //     .catch(this.handleError);
  // }

  // public deleteFamily(family: Family): Promise<any> {
  //   const url = `${this.apiBaseUrl}/families/${family._id}`;
  //   return this.http
  //     .delete(url, this.getHeaders())
  //     .toPromise()
  //     .then(response => response)
  //     .catch(this.handleError);
  // }

  // public updateFamily(family: Family): Promise<Family> {
  //   const url = `${this.apiBaseUrl}/families/${family._id}`;
  //   return this.http
  //     .put(url, family, this.getHeaders())
  //     .toPromise()
  //     .then(response => response as Family)
  //     .catch(this.handleError);
  // }


}
