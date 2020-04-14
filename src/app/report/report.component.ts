import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  displayedColumns = ['pName', 'pOwner', 'plan', 'begin', 'end',
  'draft', 'active', 'changed', 'closed', 'total'];
  dataSource = ELEMENT_DATA;
  
  byProducts(){
    this.notifyService.info("Table records updated by Products !", "Success");
  }
  byPlans(){
    this.notifyService.info("Table records updated by Expired Plans !", "Success");
  }
  constructor(public notifyService : NotificationService) { }

  ngOnInit(): void {
  }

}

// report table

export interface PeriodicElement {
  pName: any;
  pOwner: any;
  plan: any;
  begin: any;
  end: any;
  draft: any;
  active: any;
  changed: any;
  closed: any;
  total: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {pName: 'Taiji App', pOwner: 'admin', plan: 'Unplanned', begin: '', end: '',
  draft: '0', active: '0', changed: '0', closed: '3', total: '3'},
  {pName: 'Taiji App', pOwner: 'admin', plan: 'Unplanned', begin: '', end: '',
  draft: '0', active: '0', changed: '0', closed: '3', total: '3'},
  {pName: 'Taiji App', pOwner: 'admin', plan: 'Unplanned', begin: '', end: '',
  draft: '0', active: '0', changed: '0', closed: '3', total: '3'},
  {pName: 'Taiji App', pOwner: 'admin', plan: 'Unplanned', begin: '', end: '',
  draft: '0', active: '0', changed: '0', closed: '3', total: '3'},
  {pName: 'Taiji App', pOwner: 'admin', plan: 'Unplanned', begin: '', end: '',
  draft: '0', active: '0', changed: '0', closed: '3', total: '3'},
  {pName: 'Taiji App', pOwner: 'admin', plan: 'Unplanned', begin: '', end: '',
  draft: '0', active: '0', changed: '0', closed: '3', total: '3'},
  {pName: 'Taiji App', pOwner: 'admin', plan: 'Unplanned', begin: '', end: '',
  draft: '0', active: '0', changed: '0', closed: '3', total: '3'},
  {pName: 'Taiji App', pOwner: 'admin', plan: 'Unplanned', begin: '', end: '',
  draft: '0', active: '0', changed: '0', closed: '3', total: '3'},
  {pName: 'Taiji App', pOwner: 'admin', plan: 'Unplanned', begin: '', end: '',
  draft: '0', active: '0', changed: '0', closed: '3', total: '3'},
  {pName: 'Taiji App', pOwner: 'admin', plan: 'Unplanned', begin: '', end: '',
  draft: '0', active: '0', changed: '0', closed: '3', total: '3'},
  {pName: 'Taiji App', pOwner: 'admin', plan: 'Unplanned', begin: '', end: '',
  draft: '0', active: '0', changed: '0', closed: '3', total: '3'},
  {pName: 'Taiji App', pOwner: 'admin', plan: 'Unplanned', begin: '', end: '',
  draft: '0', active: '0', changed: '0', closed: '3', total: '3'},
  {pName: 'Taiji App', pOwner: 'admin', plan: 'Unplanned', begin: '', end: '',
  draft: '0', active: '0', changed: '0', closed: '3', total: '3'},
  
];

