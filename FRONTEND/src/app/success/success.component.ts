import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  AppComponent: any;
  LoginComponent: any;
  uEmail: any;

  constructor(private router: Router, private app: AppComponent) {
    app.uEmail = sessionStorage.getItem("email");
    app.isUserLoggedIn = true;
    app.role=sessionStorage.getItem("role");
    if(app.role== 'admin')
    app.roleResult=true;
    else
    app.roleResult=false; 
  }
  
  ngOnInit(): void {

  }
}
