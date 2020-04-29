import { Component, OnInit } from '@angular/core';
import { Users } from '../users/users.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public users: Users;

  constructor() { }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('users'));
  }

}
