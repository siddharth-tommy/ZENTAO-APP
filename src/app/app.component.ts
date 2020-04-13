import { Component } from '@angular/core';
import { NotificationService } from './notification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zentao-app';
  constructor(public notifyService : NotificationService){
    
  }
  loader:boolean=false;
  
}
