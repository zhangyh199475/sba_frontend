import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from '../users/users.module';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {

  userDetailForm: FormGroup;
  userId: number;
  userName: string;
  password: string;
  roleId: number;
  email: string;
  datasource: MatTableDataSource<Users>;
  users: Users;
  constructor(
    private router: Router,
    private routeInfo: ActivatedRoute,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.users = new Users();
    this.userId = this.routeInfo.snapshot.queryParams['userId'];
    this.userName = this.routeInfo.snapshot.queryParams['userName'];
    this.password = this.routeInfo.snapshot.queryParams['password'];
    this.roleId = this.routeInfo.snapshot.queryParams['roleId'];
    this.email = this.routeInfo.snapshot.queryParams['email'];
    this.initForm();
  }

  initForm() {
    this.userDetailForm = new FormGroup({
      userId: new FormControl(this.userId),
      userName: new FormControl(this.userName),
      password: new FormControl(this.password),
      roleId: new FormControl(this.roleId),
      email: new FormControl(this.email),
    });
  }

  goBack() {
    this.router.navigate(['/home/users'], {
      skipLocationChange: true
    })
  }

  goUpdate() {
    this.users.userId = this.userId;
    this.users.userName = this.userName; 
    this.users.password = this.password;
    this.users.roleId = this.roleId;
    this.users.email = this.email;
    console.log('email-->', this.email);
    
    this.usersService.updateUser(this.users).subscribe(
      result => {
        this.users = result.body;
      }
    );
  }

  goAdd() {
    this.users.userId = this.userId;
    this.users.userName = this.userName; 
    this.users.password = this.password;
    this.users.roleId = this.roleId;
    this.users.email = this.email;
    this.usersService.addUser(this.users).subscribe(
      result => {
        this.users = result.body;
      }
    );
  }

  goDelete() {
    this.usersService.deleteUser(this.userId).subscribe(
      result => {
        this.users = result.body;
      }
    );
  }
}
