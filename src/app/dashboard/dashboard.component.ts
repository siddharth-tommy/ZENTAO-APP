import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSort, Sort } from '@angular/material/sort';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['id', 's', 'title', 'status'];
  dataSource = ELEMENT_DATA;
  
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
  ngOnInit(): void {
    
  }

}
export interface PeriodicElement {
  id: any;
  s: any;
  title: any;
  status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '010', s: '1', title: 'This is a bug', status: 'Resolved'},
  {id: '020', s: '2', title: 'Zentao cloud server issue', status: 'Active'},
  {id: '045', s: '3', title: 'Not working', status: 'Resolved'},
  {id: '060', s: '2', title: 'FB id not showing', status: 'Resolved'},
  {id: '090', s: '2', title: 'UI not looks good', status: 'Resolved'},
  {id: '100', s: '1', title: 'API delay', status: 'Active'},
  {id: '110', s: '3', title: 'Scroll issue', status: 'Not a bug'},
  {id: '120', s: '2', title: 'Data issue', status: 'Resolved'},
  {id: '130', s: '1', title: 'This is a bug', status: 'Resolved'},
  {id: '150', s: '2', title: 'This is a bug', status: 'Resolved'},
  {id: '151', s: '1', title: 'UI issue', status: 'Active'},
  {id: '179', s: '1', title: 'Dropdown issue', status: 'Resolved'},
  {id: '182', s: '2', title: 'This is a bug', status: 'Resolved'},
];


@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(public notifyService : NotificationService, private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  close(){
    this._bottomSheetRef.dismiss(); 
  }
  saveToDo(){
    this.notifyService.success("Todo Created successfully !", "Success");
    this._bottomSheetRef.dismiss(); 
  }
}