import { Component, OnInit } from '@angular/core';
import { CurrentTrainingService } from '../currentTraining/currentTraining.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  userName: string;
  ifNotifi = false;
  constructor(
    private currentTrainingService: CurrentTrainingService,
  ) { }

  ngOnInit() {
    this.userName = JSON.parse(localStorage.getItem('users')).userName;
    if (this.currentTrainingService.searchTrainingsByUserName(this.userName)) {
      this.ifNotifi = true
    }
  }

}
