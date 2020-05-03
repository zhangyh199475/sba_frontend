import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../users/users.service';
import { Users, FunctionMapping } from '../users/users.module';

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
  public functionMapping: FunctionMapping;
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
      
      this.functionMapping = new FunctionMapping();
      

      this.functionMapping.searchTrainingsMapping = true;
      this.functionMapping.editSkillsMapping = false;
      this.functionMapping.technologiesMapping = false;
      this.functionMapping.usersMapping = false;
      setTimeout(() => {
        if (this.users.roleId === 1) {
          this.functionMapping.editSkillsMapping = true;
          this.functionMapping.technologiesMapping = true;
          this.functionMapping.usersMapping = true;
        } else if (this.users.roleId === 2) {
          this.functionMapping.searchTrainingsMapping = false;
          this.functionMapping.editSkillsMapping = true;
        } 

        localStorage.setItem('functionMapping', JSON.stringify(this.functionMapping));
        
        this.router.navigate(['/home/notifications']);
      }, 1000);
      
    })
  }

}
