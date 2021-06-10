import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Family } from '../data/family';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  private apiBaseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    if (environment.production)
      this.apiBaseUrl = 'http://sonyadev.herokuapp.com/api';
  }

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authenticationService.getToken()}`
      })
    };
  }
  public getFamilies(): Promise<Family[]> {
    const url = `${this.apiBaseUrl}/families`;
    return this.http
      .get(url, this.getHeaders())
      .toPromise()
      .then(response => response as Family[])
      .catch(this.handleError);
  }

  public createFamily(family: Family): Promise<Family> {
    const url = `${this.apiBaseUrl}/families`;
    return this.http
      .post(url, family, this.getHeaders())
      .toPromise()
      .then(response => response as Family)
      .catch(this.handleError);
  }

  public deleteFamily(family: Family): Promise<any> {
    const url = `${this.apiBaseUrl}/families/${family._id}`;
    return this.http
      .delete(url, this.getHeaders())
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  public updateFamily(family: Family): Promise<Family> {
    const url = `${this.apiBaseUrl}/families/${family._id}`;
    return this.http
      .put(url, family, this.getHeaders())
      .toPromise()
      .then(response => response as Family)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('In family service', error);
    return Promise.reject(error.message || error);
  }
}
