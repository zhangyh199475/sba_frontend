import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TechnologiesCriteria } from './searchTraining.module';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchTrainingService } from './searchTraining.service';

@Component({
  selector: 'app-searchTraining',
  templateUrl: './searchTraining.component.html',
  styleUrls: ['./searchTraining.component.scss']
})
export class SearchTrainingComponent implements OnInit {
  searchTrainingForm: FormGroup;
  dataSource: MatTableDataSource<TechnologiesCriteria>;
  displayedColumns = [];

  constructor(
    private router: Router,
    private routerInfo: ActivatedRoute,
    private searchTrainingService: SearchTrainingService,
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

  toAction(){
    return;
  }

}
