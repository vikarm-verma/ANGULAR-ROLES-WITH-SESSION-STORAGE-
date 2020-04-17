import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  uEmail: any;
  public logoutMsg: any;
  isUserLoggedIn = true;
  roleResult: boolean = false;
  role: any;
 

  constructor(private router: Router) {
    console.log("in cons roleresult is " + this.roleResult);
    this.uEmail = sessionStorage.getItem("email");
    this.role=sessionStorage.getItem("role");
    console.log("email in app.ts is ->" + this.uEmail);
    console.log("role in app.ts is ->"+this.role);  
    if (this.uEmail === null) {
      this.isUserLoggedIn = !this.isUserLoggedIn;
      console.log("in if of app.ts " + this.isUserLoggedIn);
    }
    else {
      this.isUserLoggedIn = this.isUserLoggedIn;
      console.log("in else of app.ts " + this.isUserLoggedIn);
    }
  }


  logout() {
    sessionStorage.clear();
    this.logoutMsg = "you have been logout successfully !!!";
    console.log(this.logoutMsg);
    this.isUserLoggedIn = !this.isUserLoggedIn;
    this.roleResult =false;
    this.uEmail = null;
    this.role = null;
    this.router.navigate(['/login']);
  }

  ngOnInit() {   
  }
}