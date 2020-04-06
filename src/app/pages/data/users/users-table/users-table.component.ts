import { Component, OnInit } from '@angular/core';
import { User, UsersService } from 'src/app/open-api';
import { SessionService } from 'src/app/services/session.service';
import { UsersComponentService } from '../services/users-component.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  users: User[] = [];
  userSelected: User;

  loading = false;

  constructor(
    private sessionService: SessionService,
    private usersService: UsersService,
    private usersComponentService: UsersComponentService
  ) { }

  ngOnInit(): void {

    this.loading = true;
    this.usersService
      .getUsers(this.sessionService.getCompanyId())
      .subscribe(result => {
        this.loading = false;
        this.users = result;
      }, _error => {
        this.loading = false;
      })

    this.usersComponentService.userDeleted.subscribe(user => this.removeUser(user));
    this.usersComponentService.userModified.subscribe(user => this.addUser(user));
  }

  onRowSelect(event) {
    this.userSelected = event.data;
    this.usersComponentService.selectUser(Object.assign({}, event.data))
  }

  private removeUser(user: User) {
    this.users = this.users.filter(obj => obj.id !== user.id)
  }

  private addUser(user: User) {
    const userFound = this.users.find(obj => obj.id === user.id);
    if (userFound !== undefined) {
      const index = this.users.indexOf(userFound);
      if (index !== -1) {
        this.users[index] = user;
      }
    } else {
      this.users.push(user);
    }
  }
}