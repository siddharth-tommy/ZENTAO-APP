import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-my-stories-table',
  templateUrl: './my-stories-table.component.html',
  styleUrls: ['./my-stories-table.component.css']
})
export class MyStoriesTableComponent implements OnInit {
  displayedColumns = ['p', 'title', 'status'];
  dataSource = ELEMENT_DATA;

  
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  p: any;
  title: any;
  status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {p: '1', title: 'The user could login by Zentao server', status: 'Active'},
  {p: '2', title: 'Interface designing', status: 'Active'},
  {p: '3', title: 'The user could login by Zentao server', status: 'Active'},
  {p: '2', title: 'UI designing', status: 'Resolved'},
  {p: '1', title: 'Face ID is available for login', status: 'Active'},
  {p: '3', title: 'The user could login by Zentao server', status: 'Active'},
  {p: '1', title: 'The user could login by Zentao server', status: 'Active'},
];

