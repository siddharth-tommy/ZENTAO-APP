import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { NotificationService } from '../notification.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogData } from '../product/product.component';

@Component({
  selector: 'app-iteration',
  templateUrl: './iteration.component.html',
  styleUrls: ['./iteration.component.css']
})
export class IterationComponent implements OnInit {
  displayedColumns = ['iName', 'end', 'status', 'estimates', 'cost', 'left', 'progress', 'burnDown'];
  dataSource = ELEMENT_DATA;

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateIterationComponent, {
      width: '50%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  @ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  iName: any;
  end: any;
  status: any;
  estimates: any;
  cost: any;
  left: any;
  progress: any;
  burnDown: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {iName: 'Zento Client Desktop', end: '2019-10-05', status: 'delayed', estimates: '10',
  cost: '0', left: '0', progress: '0%', burnDown: 'High'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'Zento Client Desktop', end: '2019-10-05', status: 'delayed', estimates: '10',
  cost: '0', left: '0', progress: '0%', burnDown: 'High'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Medium'},

  {iName: 'Zento Client Desktop', end: '2019-10-05', status: 'delayed', estimates: '10',
  cost: '0', left: '0', progress: '0%', burnDown: 'High'},

  {iName: 'Zento Client Desktop', end: '2019-10-05', status: 'delayed', estimates: '10',
  cost: '0', left: '0', progress: '0%', burnDown: 'Low'},

  {iName: 'Zento Client', end: '2019-10-05', status: 'delayed', estimates: '12',
  cost: '0', left: '0', progress: '0%', burnDown: 'High'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},
  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},

  {iName: 'test sprint', end: '2019-10-09', status: 'delayed', estimates: '10',
  cost: '10', left: '7', progress: '20%', burnDown: 'Low'},
];

// create iteration dialog

@Component({
  selector: 'iteration-dialog-overview-example-dialog',
  templateUrl: 'iteration-dialog-overview-example-dialog.html',
})

export class CreateIterationComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateIterationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public notifyService : NotificationService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  save(){
    this.notifyService.success("Iteration Created successfully !", "Success");
    this.dialogRef.close();
  }
  
}