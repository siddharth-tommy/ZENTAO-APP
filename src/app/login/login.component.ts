import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login(){
    this.notifyService.success("Login Success", "Welcome User !");
  }
  constructor(public notifyService : NotificationService) { }

  ngOnInit(): void {
  }

}
