import { Component, OnInit } from '@angular/core';
import { FunctionMapping } from '../users/users.module';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  public functionMapping: FunctionMapping;
  public searchTrainingsMapping = false;
  public usersMapping = false;
  public technologiesMapping = false;
  constructor(
  ) { }

  ngOnInit() {
    this.functionMapping = JSON.parse(localStorage.getItem('functionMapping'));
    this.searchTrainingsMapping = this.functionMapping.searchTrainingsMapping;
    this.usersMapping = this.functionMapping.usersMapping;
    this.technologiesMapping = this.functionMapping.technologiesMapping;
  }

}
