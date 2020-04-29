import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../users/users.service';
import { Users } from '../users/users.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public signinForm: FormGroup;
  public userName: string;
  public password: string;
  public users: Users;
  constructor(
    private router: Router,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signinForm = new FormGroup({
      userName: new FormControl(this.userName),
      password: new FormControl(this.password),
    });
  }

  onSubmit() {
    this.usersService.login(this.userName).subscribe(result => {
      this.users = result['body'];
      localStorage.setItem('users', JSON.stringify(this.users))
      console.log('this.users-->', this.users);
      
    })
    this.router.navigate(['/home']);
  }

}
