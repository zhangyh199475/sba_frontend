import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { SkillsCriteria } from './editSkills.module';
import { EditSkillsService } from './editSkills.service';
@Component({
  selector: 'app-editSkills',
  templateUrl: './editSkills.component.html',
  styleUrls: ['./editSkills.component.scss']
})
export class EditSkillsComponent implements OnInit {

  skillsSearchForm: FormGroup;
  dataSource: MatTableDataSource<SkillsCriteria>;
  displayedColumns = [];

  constructor(
    private router: Router,
    private routerInfo: ActivatedRoute,
    private editSkillsService: EditSkillsService,
  ) { }

  ngOnInit() {
    this.displayedColumns = [
      'userName',
      'techName',
      'type',
      'price',
      'action'
    ]
  }

  onSearch(){
    this.editSkillsService.searchSkills().subscribe( result => {
      const skillsCriteria = result["body"];
      this.dataSource = new MatTableDataSource<SkillsCriteria>(skillsCriteria);
      console.log('skillsCriteria-->', skillsCriteria);
      
    })
  }

  toAction(){
    return;
  }
}
