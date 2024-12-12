import { CanActivateChildFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private apiService: ApiService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user && user.tipo) {
      const allowedRoles = route.data['roles'] as Array<string>;

      if (allowedRoles.includes(user.tipo)) {
        return true;
      } else {
        // Si no tiene acceso, redirigirlo al inicio
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      // Si no está autenticado, redirigir al login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
