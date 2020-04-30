import { Component, OnInit } from '@angular/core';
import { FunctionMapping } from '../users/users.module';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  private functionMapping: FunctionMapping;
  constructor(
  ) { }

  ngOnInit() {
    this.functionMapping = JSON.parse(localStorage.getItem('functionMapping'));
  }

}
