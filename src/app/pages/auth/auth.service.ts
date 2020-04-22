import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BranchesService, CompaniesService, UsersService } from 'src/app/open-api';
import { SessionService } from 'src/app/services/session.service';
import { LoggedUser } from './logged-user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject$: BehaviorSubject<LoggedUser>;

  constructor(
    private sessionService: SessionService,
    private companiesService: CompaniesService,
    private branchesService: BranchesService,
    private usersService: UsersService
  ) {
    this.currentUserSubject$ = new BehaviorSubject(JSON.parse(sessionStorage.getItem('currentUser')));
  }

  public get currentUserValue(): BehaviorSubject<LoggedUser> {
    return this.currentUserSubject$;
  }

  login(username: string, password: string): Observable<LoggedUser> {

    // TODO change
    // this.usersService.getUser(companyId,1)
    // with authentication endpoint

    return this.usersService.getUser(username).pipe(switchMap(data => {

      let cs = this.companiesService.getCompany();
      let bs = this.branchesService.getBranches();
      let ud = this.usersService.getUser(username);

      return forkJoin([cs, bs, ud]).pipe(map((results: any[]) => {
        this.sessionService.setCompany(results[0]);
        this.sessionService.setBranches(results[1]);
        this.sessionService.setBranch(Object.assign({}, results[1][0]));
        this.branchesService.getBranch(results[1][0].id)
          .subscribe(b => this.sessionService.setBranch(b));

        let user = new LoggedUser();
        user.user = results[2];
        user.accessToken = 'askokewjfaodkawopdkpaokdopwktw4ngoig';

        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject$.next(user);

        return user;
      }))

    }))
  }

  logout() {
    // remove user from session storage to log user out
    sessionStorage.removeItem('currentUser');
    this.sessionService.clearData();
    this.currentUserSubject$.next(null);
  }
}
