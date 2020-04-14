import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {
  panelOpenState = false;

  constructor() { }
  displayedColumns = ['name', 'size', 'author', 'updatedDate'];
  dataSource = ELEMENT_DATA;

  displayedColumns2 = ['iName', 'begin', 'end'];
  dataSource2 = ELEMENT_DATA2;
  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  name: any;
  size: any;
  author: any;
  updatedDate: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Document 1', size: '15kb', author: 'Demo', updatedDate: '25/07/2019'},
  {name: 'Document 1', size: '15kb', author: 'Demo', updatedDate: '25/07/2019'},
  {name: 'Document 1', size: '15kb', author: 'Demo', updatedDate: '25/07/2019'},
  {name: 'Document 1', size: '15kb', author: 'Demo', updatedDate: '25/07/2019'},
  {name: 'Document 1', size: '15kb', author: 'Demo', updatedDate: '25/07/2019'},
  {name: 'Document 1', size: '15kb', author: 'Demo', updatedDate: '25/07/2019'},
  {name: 'Document 1', size: '15kb', author: 'Demo', updatedDate: '25/07/2019'},
];

export interface PeriodicElement2 {
  iName: any;
  begin: any;
  end: any;
  
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  {iName: 'Test Sprint', begin: '	2019-09-29', end: '	2019-10-05'},
  {iName: 'Zentao Client Desktop', begin: '	2019-09-29', end: '	2019-10-05'},
  {iName: 'Zsite', begin: '	2019-09-29', end: '	2019-10-05'},
  {iName: 'Zsite', begin: '	2019-09-29', end: '	2019-10-05'},
  {iName: 'Zentao Client Desktop', begin: '	2019-09-29', end: '	2019-10-05'},
  {iName: 'Test Sprint', begin: '	2019-09-29', end: '	2019-10-05'}
];
