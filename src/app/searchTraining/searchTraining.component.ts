import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TechnologiesCriteria, Trainings } from './searchTraining.module';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchTrainingService } from './searchTraining.service';
import { CurrentTrainingService } from '../currentTraining/currentTraining.service';

@Component({
  selector: 'app-searchTraining',
  templateUrl: './searchTraining.component.html',
  styleUrls: ['./searchTraining.component.scss']
})
export class SearchTrainingComponent implements OnInit {
  searchTrainingForm: FormGroup;
  dataSource: MatTableDataSource<TechnologiesCriteria>;
  displayedColumns = [];
  trainings: Trainings;

  constructor(
    private router: Router,
    private routerInfo: ActivatedRoute,
    private searchTrainingService: SearchTrainingService,
    private currentTrainingService: CurrentTrainingService,
  ) { }

  ngOnInit() {
    this.displayedColumns = [
      'techName',
      'userName',
      'price',
      'linkedinUrl',
      'mentorProfile',
      'expYear',
      'action'
    ]
  }

  onSearch(){
    this.searchTrainingService.searchTrainings().subscribe( result => {
      const technologiesCriteria = result["body"];
      this.dataSource = new MatTableDataSource<TechnologiesCriteria>(technologiesCriteria);
      console.log('technologiesCriteria-->', technologiesCriteria);
      
    })
  }

  toAction(row){
        this.trainings.techName = row.techName;
        this.trainings.mentorName = row.userName;
        this.trainings.price = row.price;
        this.trainings.studentName = JSON.parse(localStorage.getItem('users')).userName;
        this.currentTrainingService.addTraining(this.trainings);
  }

}
