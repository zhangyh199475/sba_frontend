import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { EditSkillsService } from '../editSkills/editSkills.service';
import { SkillsCriteria } from '../editSkills/editSkills.module';

@Component({
  selector: 'app-editSkills-detail',
  templateUrl: './editSkills-detail.component.html',
  styleUrls: ['./editSkills-detail.component.scss']
})
export class EditSkillsDetailComponent implements OnInit {

  skillForm: FormGroup;
  userName: string;
  techName: string;
  type: string;
  price: number;
  dataSource: MatTableDataSource<SkillsCriteria>;
  displayedColumns = [];
  skills: SkillsCriteria;
  constructor(
    private router: Router,
    private routeInfo: ActivatedRoute,
    private editSkillsService: EditSkillsService,
  ) { }

  ngOnInit() {
    this.skills = new SkillsCriteria();
    this.userName = this.routeInfo.snapshot.queryParams['userName'];
    this.techName = this.routeInfo.snapshot.queryParams['techName'];
    this.type = this.routeInfo.snapshot.queryParams['type'];
    this.price = this.routeInfo.snapshot.queryParams['price'];
    this.initForm();
  }

  initForm() {
    this.skillForm = new FormGroup({
      userName: new FormControl(this.userName),
      techName: new FormControl(this.techName),
      type: new FormControl(this.type),
      price: new FormControl(this.price),
    });
  }

  goBack() {
    this.router.navigate(['/home/editSkills'], {
      skipLocationChange: true
    })
  }

  goUpdate() {
    this.skills.userName = this.userName;
    this.skills.techName = this.techName; 
    this.skills.type = this.type;
    this.skills.price = this.price;
    
    this.editSkillsService.updateSkills(this.skills).subscribe();
  }

  goAdd() {
    this.skills.userName = this.userName;
    this.skills.techName = this.techName; 
    this.skills.type = this.type;
    this.skills.price = this.price;
    
    this.editSkillsService.addSkills(this.skills).subscribe();
  }

  goDelete() {
    this.editSkillsService.deleteSkills(this.skills).subscribe();
  }

}
