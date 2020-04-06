import { Injectable } from '@angular/core';
import { Role } from '../open-api';
import { AuthService } from '../pages/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthUtils {

  constructor(private authService: AuthService) { }

  isInRole(roles: Role[]): boolean {

    var rolesToCheck: Role[] = [];
    if (roles) { rolesToCheck = roles }

    let user = this.authService.currentUserValue.value.user
    if (!user || !user.groups) { return false }

    let userRoles: Role[] = [];
    user.groups.map(g => userRoles = userRoles.concat(g.roles));

    let inrole = userRoles.some(r => rolesToCheck.indexOf(r) >= 0);

    return inrole;
  }
}
