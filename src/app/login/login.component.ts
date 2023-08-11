import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = "";
  pwd:string = "";
  error:string ="";

  users = [
    {email:"test@123.com", pwd:"123"},
    {email:"test@456.com", pwd:"456"},
    {email:"test@789.com", pwd:"789"}
  ];

  constructor(private router:Router) {};

  login() {
    const loginCredentials = this.users.find(
      user => user.email === this.email && user.pwd === this.pwd
    );

    if (loginCredentials) {
      this.router.navigate(['/account']);
    } else {
      this.error = "Invalid Credentials"
      alert(this.error);
      this.email="";
      this.pwd="";
    };
  };
}
