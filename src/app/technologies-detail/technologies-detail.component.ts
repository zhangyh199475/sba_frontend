import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Technologies } from '../technologies/technologies.module';
import { Router, ActivatedRoute } from '@angular/router';
import { TechnologiesService } from '../technologies/technologies.service';

@Component({
  selector: 'app-technologies-detail',
  templateUrl: './technologies-detail.component.html',
  styleUrls: ['./technologies-detail.component.scss']
})
export class TechnologiesDetailComponent implements OnInit {

  technologiesForm: FormGroup;
  techId: number;
  techName: string;
  type: string;
  active: number;
  price: number;
  datasource: MatTableDataSource<Technologies>;
  technologies: Technologies;
  constructor(
    private router: Router,
    private routeInfo: ActivatedRoute,
    private technologiesService: TechnologiesService,
  ) { }

  ngOnInit() {
    this.technologies = new Technologies();
    this.techId = this.routeInfo.snapshot.queryParams['techId'];
    this.techName = this.routeInfo.snapshot.queryParams['techName'];
    this.type = this.routeInfo.snapshot.queryParams['type'];
    this.active = this.routeInfo.snapshot.queryParams['active'];
    this.price = this.routeInfo.snapshot.queryParams['price'];
    this.initForm();
  }

  initForm() {
    this.technologiesForm = new FormGroup({
      techId: new FormControl(this.techId),
      techName: new FormControl(this.techName),
      type: new FormControl(this.type),
      active: new FormControl(this.active),
      price: new FormControl(this.price),
    });
  }

  goBack() {
    this.router.navigate(['/home/technologies'], {
      skipLocationChange: true
    })
  }

  goUpdate() {
    this.technologies.techId = this.techId;
    this.technologies.techName = this.techName; 
    this.technologies.type = this.type;
    this.technologies.active = this.active;
    this.technologies.price = this.price;
    
    this.technologiesService.updateTechnologies(this.technologies).subscribe(
      result => {
        this.technologies = result.body;
      }
    );
  }

  goAdd() {
    this.technologies.techId = this.techId;
    this.technologies.techName = this.techName; 
    this.technologies.type = this.type;
    this.technologies.active = this.active;
    this.technologies.price = this.price;
    this.technologiesService.addTechnologies(this.technologies).subscribe(
      result => {
        this.technologies = result.body;
      }
    );
  }

  goDelete() {
    this.technologiesService.deleteTechnologies(this.techId).subscribe(
      result => {
        this.technologies = result.body;
      }
    );
  }
}
