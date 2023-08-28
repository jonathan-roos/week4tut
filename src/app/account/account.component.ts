import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { OnInit } from '@angular/core'
import { User } from '../user'
import { LoggerService } from '../services/logger.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
constructor(private authService: AuthService) {}

  currentUser: User = new User()
  username: string = '';
  birthdate: string = '';
  age: number = 0;
  email: string = '';
  loggedIn: boolean = false;

  ngOnInit(){
    this.currentUser = JSON.parse(this.authService.getCurrentUser() || '{}');
    if (this.authService.isLoggedIn()) {
      this.username = this.currentUser.username;
      this.birthdate = this.currentUser.birthdate;
      this.age = this.currentUser.age;
      this.email = this.currentUser.email;
      this.loggedIn=true
    }else{
      this.loggedIn=false
    }
  }
  
}

