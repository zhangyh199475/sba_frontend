import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Trainings } from '../searchTraining/searchTraining.module';
import { CurrentTrainingService } from './currentTraining.service';
@Component({
  selector: 'app-currentTraining',
  templateUrl: './currentTraining.component.html',
  styleUrls: ['./currentTraining.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  trainingSearchForm: FormGroup;
  dataSource: MatTableDataSource<Trainings>;
  userName: string;
  displayedColumns = [];
  constructor(
    private router: Router,
    private routerInfo: ActivatedRoute,
    private currentTrainingService: CurrentTrainingService,
  ) { }

  ngOnInit() {
    this.displayedColumns = [
      'techName',
      'startDate',
      'endDate',
      'studentName',
      'mentorName',
      'price',
      'currentPrice',
      'currentPercent',
      'rate',
      'action'
    ]
  }

  onSearch(){
    this.currentTrainingService.searchCurrentTrainings().subscribe( result => {
      const currentTrainings = result["body"];
      this.dataSource = new MatTableDataSource<Trainings>(currentTrainings);
      console.log('currentTrainings-->', currentTrainings);
      
    })
  }

  toAction(){
    return;
  }

}
