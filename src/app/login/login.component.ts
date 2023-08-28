import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import {User} from "../user";
import {Router} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../services/logger.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private loggerService: LoggerService) {};

  errormsg = "";
  newUser: User = new User();
  email:string = "";
  pwd:string = "";
  loggedIn:boolean = false;

  ngOnInit() {
    if (sessionStorage.getItem('currentUser')){
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
  };

  signIn(event: any) {
    console.log("at signin");
    event.preventDefault();
    this.authService.login(this.email,this.pwd).subscribe({
      next:
        (data)=>{
          if (data.valid == true){
            this.newUser = new User(data.username, data.email)
            this.newUser.age = data.age;
            this.newUser.birthdate = data.birthdate;
            this.newUser.valid = true;
            this.authService.setCurrentUser(this.newUser);
            this.router.navigate(['/profile']);
          }else{
           
            this.errormsg = "There is a problem with the credentials";
          }
      
      error: () => {
        this.errormsg = "There is a problem with the credentials";
        this.loggerService.error(this.errormsg)
      }
        
      }
      
   
    })
  };
}
