import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./services/authentication.service";

@Injectable({
    providedIn: 'root',
  })
export class LoginActivate implements CanActivate {
    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authenticationService.isLoggedIn()) {
            this.router.navigate(['auth']);
        }
        return true;
    }
}