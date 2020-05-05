import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Trainings } from '../searchTraining/searchTraining.module';
import { CurrentTrainingService } from '../currentTraining/currentTraining.service';


@Component({
  selector: 'app-completedTraining-detail',
  templateUrl: './completedTraining-detail.component.html',
  styleUrls: ['./completedTraining-detail.component.scss']
})
export class CompletedTrainingDetailComponent implements OnInit {

  techName: string;
  startDate: string;
  endDate: string;
  studentName: string;
  mentorName: string;
  price: number;
  currentPercent: number;
  currentPrice: number;
  rate: number;
  dataSource: MatTableDataSource<Trainings>;
  trainings: Trainings;
  trainingForm: FormGroup;

  constructor(
    private router: Router,
    private routeInfo: ActivatedRoute,
    private currentTrainingService: CurrentTrainingService,
  ) { }

  ngOnInit() {
    this.trainings = new Trainings();
    this.techName = this.routeInfo.snapshot.queryParams['techName'];
    this.startDate = this.routeInfo.snapshot.queryParams['startDate'];
    this.endDate = this.routeInfo.snapshot.queryParams['endDate'];
    this.studentName = this.routeInfo.snapshot.queryParams['studentName'];
    this.mentorName = this.routeInfo.snapshot.queryParams['mentorName'];
    this.price = this.routeInfo.snapshot.queryParams['price'];
    this.currentPercent = this.routeInfo.snapshot.queryParams['currentPercent'];
    this.currentPrice = this.routeInfo.snapshot.queryParams['currentPrice'];
    this.rate = this.routeInfo.snapshot.queryParams['rate'];
    this.initForm();
  }

  initForm(){
    this.trainingForm = new FormGroup({
      techName: new FormControl(this.techName),
      startDate: new FormControl(this.startDate),
      endDate: new FormControl(this.endDate),
      studentName: new FormControl(this.studentName),
      mentorName: new FormControl(this.mentorName),
      price: new FormControl(this.price),
      currentPercent: new FormControl(this.currentPercent),
      currentPrice: new FormControl(this.currentPrice),
      rate: new FormControl(this.rate),
    });
  }

  goBack() {
    this.router.navigate(['/home/currentTraining'], {
      skipLocationChange: true
    })
  }

  goUpdate() {
    this.trainings.techName = this.techName;
    this.trainings.startDate = this.startDate; 
    this.trainings.endDate = this.endDate;
    this.trainings.studentName = this.studentName;
    this.trainings.mentorName = this.mentorName;
    this.trainings.price = this.price;
    this.trainings.currentPercent = this.currentPercent; 
    this.trainings.currentPrice = this.currentPrice;
    this.trainings.rate = this.rate;
    
    this.currentTrainingService.updateTraining(this.trainings).subscribe();
  }

}
