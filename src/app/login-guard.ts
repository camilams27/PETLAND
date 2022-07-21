import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('login');
    console.log(user);
    

    if (user) {
      return true;
    }

    this.router.navigate(['acesso-negado']);

    return false;
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}