import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../notification.service';

export interface DialogData {
  name: string;
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  displayedColumns = ['id', 's', 'title', 'status'];
  dataSource = ELEMENT_DATA;

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateProductComponent, {
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


// mat-dialog component


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class CreateProductComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public notifyService : NotificationService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  save(){
    this.notifyService.success("Product Created successfully !", "Success");
    this.dialogRef.close();
  }
  
}