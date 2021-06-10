import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../@core/data/user';
import { AuthenticationService } from '../../@core/services/authentication.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
    if (this.authenticationService.isLoggedIn())
      this.router.navigateByUrl('/pages');
    else
      this.isCheckedLogin = true;
  }

  redirectDelay: number = 0;
  showMessages: any = { success: true, error: true };

  errors: boolean = false;
  user: any = { email: null, password: null };
  submitted: boolean = false;
  rememberMe = false;
  isCheckedLogin = false;

  ngOnInit(): void {

  }

  doLogin(): void {
    this.authenticationService.login(this.user)
      .then(() => {
        this.submitted = false;
        this.router.navigateByUrl('/pages')
      })
      .catch((message) => {
        this.submitted = false;
        this.errors = true;
        this.isCheckedLogin = true;
      });
  }

  public login(): void {
    this.errors = false;
    this.submitted = true;
    this.isCheckedLogin = false;
    this.doLogin();
  }

}
