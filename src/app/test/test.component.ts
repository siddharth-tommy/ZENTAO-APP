import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  displayedColumns = ['id', 'product', 'reqName', 'itrBuild', 'begin' ,'end'];
  dataSource = ELEMENT_DATA;

  
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  id: any;
  product: any;
  reqName: any;
  itrBuild: any;
  begin:any;
  end:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '010', product: 'A smart watch development', reqName: 'Check all the bugs of the operating system	',
  itrBuild: 'ALM extension/Operating system done', begin: '2019-09-23	', end: '2019-09-27'},

  {id: '021', product: 'Zsite', reqName: 'CMS feature test 0.0.1',
  itrBuild: 'Zsite CMS module/CMS done', begin: '2019-09-10', end: '2019-09-12'},

  {id: '37', product: 'To test if the front end designing is qualified or not	', reqName: 'UI interface designing/build2',
  itrBuild: 'ALM extension/Operating system done', begin: '2019-08-09	', end: '2019-08-11'},

  {id: '010', product: 'A smart watch development', reqName: 'Check all the bugs of the operating system	',
  itrBuild: 'ALM extension/Operating system done', begin: '2019-09-23	', end: '2019-09-27'},

  {id: '039', product: 'To test if the front end designing is qualified or not	', reqName: 'UI interface designing/build2',
  itrBuild: 'ALM extension/Operating system done', begin: '2019-08-09	', end: '2019-08-11'},
  
  {id: '040', product: 'Zsite', reqName: 'CMS feature test 0.0.1',
  itrBuild: 'Zsite CMS module/CMS done', begin: '2019-09-10', end: '2019-09-12'},

  {id: '050', product: 'A smart watch development', reqName: 'Check all the bugs of the operating system	',
  itrBuild: 'ALM extension/Operating system done', begin: '2019-09-23	', end: '2019-09-27'},
];
