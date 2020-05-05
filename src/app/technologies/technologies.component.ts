import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Technologies } from './technologies.module';
import { TechnologiesService } from './technologies.service';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  searchTechnologiesForm: FormGroup;
  dataSource: MatTableDataSource<Technologies>;
  displayedColumns = [];
  constructor(
    private router: Router,
    private routerInfo: ActivatedRoute,
    private technologiesService: TechnologiesService,
  ) { }

  ngOnInit() {
    this.displayedColumns = [
      'techId',
      'techName',
      'active',
      'type',
      'price',
      'action'
    ]
  }

  onSearch(){
    this.technologiesService.searchTechnologies().subscribe( result => {
      const technologies = result["body"];
      this.dataSource = new MatTableDataSource<Technologies>(technologies);
      console.log('technologies-->', technologies);
      
    })
  }

  toAction(row){
    this.router.navigate(['/home/technologies-detail'], {
      queryParams: {
        techId: row.techId,
        techName: row.techName,
        type: row.type,
        active: row.active,
        price: row.price,
      }, skipLocationChange: true
    });
  }
}
