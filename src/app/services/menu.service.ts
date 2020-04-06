import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api/menuitem';
import { BehaviorSubject, Observable } from 'rxjs';
import { Role } from '../open-api';
import { AuthService } from '../pages/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  _dataMenuItems: BehaviorSubject<MenuItem[]> = new BehaviorSubject([]);

  constructor(
    private translate: TranslateService,
    private authService: AuthService,
    private router: Router) {

    translate.onLangChange.subscribe((_event: LangChangeEvent) => this.buildDataMenu());
    authService.currentUserValue.subscribe(() => this.buildDataMenu());
  }

  getDataMenu(): Observable<MenuItem[]> {
    return this._dataMenuItems.asObservable();
  }

  private buildDataMenu() {
    let menu: MenuItem[] = [];

    let allRoles: Role[] = [];
    if (this.authService.currentUserValue.value) {
      this.authService.currentUserValue.value.user.groups.map(g => allRoles = allRoles.concat(g.roles));
    }

    // COMPANY
    /*
    if(allRoles.indexOf(Role.)) {
      menu.push({
        label: this.translate.instant('company'),
        icon: 'pi pi-table'
      });
    }
    */

    // SECURITY
    if (allRoles.indexOf(Role.SECURITYVIEW) >= 0) {
      menu.push(
        {
          label: this.translate.instant('security'),
          icon: 'pi pi-table',
          items: [
            {
              label: this.translate.instant('user', { count: 2 }),
              icon: 'pi pi-table',
              command: () => this.router.navigate(['users'])
            },
            {
              label: this.translate.instant('group', { count: 2 }),
              icon: 'pi pi-table',
              command: () => this.router.navigate(['groups'])
            }
          ]
        }
      );
    }
    this._dataMenuItems.next(menu);
  }
}