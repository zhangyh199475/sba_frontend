import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from './users.module';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userSearchForm: FormGroup;
  dataSource: MatTableDataSource<Users>;
  userName: string;
  displayedColumns = [];
  constructor(
    private router: Router,
    private routerInfo: ActivatedRoute,
    private usersService: UsersService
    ) { }

  ngOnInit() {
    this.displayedColumns = [
      'userId',
      'userName',
      'password',
      'roleId',
      'email',
      'action'
    ]
  }

  onSearch(){
    this.usersService.getUsersList().subscribe( result => {
      const usersList = result["body"];
      this.dataSource = new MatTableDataSource<Users>(usersList);
      console.log('usersList-->', usersList);
      
    })
  }

  toAction(){
    return;
  }

}
