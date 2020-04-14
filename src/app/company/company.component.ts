import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  displayedColumns = ['id', 'name', 'account', 'role', 'email',
  'ph', 'skype', 'lLog', 'visit', 'act'];
  dataSource = ELEMENT_DATA;

  constructor(public notifyService : NotificationService) { }

  ngOnInit(): void {
  }

}

// Company table

export interface PeriodicElement {
  id: any;
  name: any;
  account: any;
  role: any;
  email: any;
  gend: any;
  ph: any;
  skype: any;
  lLog: any;
  visit: any;
  act: any
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '000', name: 'Joshua', account: 'admin', role: 'Developer', email: 'admin@yahoo.com',
  gend: 'F', ph: '0', skype: '0', lLog: '2019/04/05', visit: '23', act: ''},

  {id: '001', name: 'Harry', account: 'admin', role: 'Developer', email: 'harry@yahoo.com',
  gend: 'M', ph: '0', skype: '0', lLog: '2019/04/05', visit: '30', act: ''},

  {id: '002', name: 'Lera K', account: 'admin', role: 'Developer', email: 'lera_k@yahoo.com',
  gend: 'F', ph: '0', skype: '0', lLog: '2019/04/05', visit: '40', act: ''},

  {id: '03', name: 'Lera S', account: 'admin', role: 'QA', email: 'qa@yahoo.com',
  gend: 'F', ph: '0', skype: '0', lLog: '2019/04/05', visit: '55', act: ''},

  {id: '001', name: 'Chris', account: 'Super Admin', role: 'Manager', email: 'managerchris@yahoo.com',
  gend: 'M', ph: '0', skype: '0', lLog: '2019/04/05', visit: '65', act: ''},

  {id: '007', name: 'Ram', account: 'admin', role: 'Developer', email: 'ram@yahoo.com',
  gend: 'M', ph: '0', skype: '0', lLog: '2019/04/05', visit: '80', act: ''},
  
];

