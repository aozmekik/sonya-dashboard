import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Family } from '../data/family';
import { AuthenticationService } from './authentication.service';
import { GeneralService } from './general.service';
import { User } from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GeneralService {

  constructor(private http: HttpClient, private auth: AuthenticationService) {
    super(http, auth);
  }

  public getUsers(): Promise<User[]> {
    const url = `${this.apiBaseUrl}/admin/users`;
    return this.http
      .get(url, this.getHeaders())
      .toPromise()
      .then(response => response as User[])
      .catch(this.handleError);
  }

  public updateUser(user): Promise<User> {
    const url = `${this.apiBaseUrl}/admin/users/${user._id}`;
    return this.http
      .post(url, user, this.getHeaders())
      .toPromise()
      .then(response => response as User)
      .catch(this.handleError);
  }

}
