import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../@core/services/authentication.service';

@Component({
  selector: 'ngx-logout',
  template: `
    <div> Çıkış yapılıyor... </div>
  `,
})
export class LogoutComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
  }


  ngOnInit(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/auth/login');
  }


}
