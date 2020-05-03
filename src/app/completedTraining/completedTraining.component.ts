import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Trainings } from '../searchTraining/searchTraining.module';
import { CompletedTrainingService } from './completedTraining.service';

@Component({
  selector: 'app-completedTraining',
  templateUrl: './completedTraining.component.html',
  styleUrls: ['./completedTraining.component.scss']
})
export class CompletedTrainingComponent implements OnInit {
  trainingSearchForm: FormGroup;
  dataSource: MatTableDataSource<Trainings>;
  userName: string;
  displayedColumns = [];
  constructor(
    private router: Router,
    private routerInfo: ActivatedRoute,
    private completedTrainingService: CompletedTrainingService,
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
    this.completedTrainingService.searchCompletedTrainings().subscribe( result => {
      const completedTrainings = result["body"];
      this.dataSource = new MatTableDataSource<Trainings>(completedTrainings);
      console.log('completedTrainings-->', completedTrainings);
      
    })
  }

  toAction(){
    return;
  }
}
