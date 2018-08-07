<<<<<<< HEAD
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
=======
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
>>>>>>> 278d18a2748b58c9c2111204daa2d95352fd7371

@Injectable()
export class AuthGuard implements CanActivate {

<<<<<<< HEAD
  constructor(private authService: AuthService) {}
=======
  constructor(private authService: AuthService) { }
>>>>>>> 278d18a2748b58c9c2111204daa2d95352fd7371

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}
