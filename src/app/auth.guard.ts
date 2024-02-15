import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // Check your authentication logic here, e.g., from a service or using a token.
    if (localStorage.getItem('token')) {
      return true; // User is authenticated, allow access
    } else {
      this.router.navigate(['/login']); // User is not authenticated, redirect to login
      return false;
    }
  }
  
}
