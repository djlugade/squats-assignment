import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserAuthService } from '../user-auth.service';

@Injectable()
export class UserAuthGuard implements CanActivate {
  constructor(private auth:UserAuthService, private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.auth.loggedIn()){
      return true;
    }
     this.router.navigate(['/login']);
      return false;     
  }

  
}

