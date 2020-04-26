import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from '../users/users-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Users } from '../users/users.module';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public signinForm: FormGroup;
  public userName: string;
  public password: string;
  public users: Users;

  constructor(
    private router: Router,
    private userService: UsersServiceService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signinForm = new FormGroup({
      'userName': new FormControl(this.userName),
    });
  }

  onSubmit(){
    this.userService.login(this.userName).subscribe(result => {
      this.users = result['body'];
      localStorage.setItem('users', JSON.stringify(this.users));
      this.router.navigate(['/home']);
    },
    error => {
      return;
    });
  }

}
