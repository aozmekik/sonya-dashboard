import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../data/storage';
import { User } from '../data/user';
import { AuthResponse } from '../data/authresponse';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiBaseUrl = 'http://localhost:8080/api';


  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private http: HttpClient
  ) {
    if (environment.production)
      this.apiBaseUrl = 'https://sonyadev.herokuapp.com/api';
  }

  public getToken(): string {
    return this.storage.getItem('sonya-token');
  }

  public saveToken(token: string): void {
    this.storage.setItem('sonya-token', token);
  }

  public login(user: User): Promise<any> {
    return this.loginApi(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

  public logout(): void {
    this.storage.removeItem('sonya-token');
  }

  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { _id, email, name } = JSON.parse(atob(token.split('.')[1]));
      return { _id, email, name } as User;
    }
  }

  public loginApi(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('admin/login', user);
  }


  private makeAuthApiCall(urlPath: string, user: any): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
  }
}