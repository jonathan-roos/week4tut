import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { OnInit } from '@angular/core'
import { User } from '../user'
import { LoggerService } from '../services/logger.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private loggerService: LoggerService){}

  currentUser: User = new User()
  username: string = '';
  birthdate: string = '';
  age: number = 0;
  email: string = '';
  loggedIn: boolean = false;

  ngOnInit(){
    this.currentUser = JSON.parse(this.authService.getCurrentUser() || '{}');
    if (this.authService.isLoggedIn()) {
      this.loggerService.logUser(this.currentUser)
      this.username = this.currentUser.username;
      this.birthdate = this.currentUser.birthdate;
      this.age = this.currentUser.age;
      this.email = this.currentUser.email;
      this.loggedIn=true
    }else{
      this.loggedIn=false
    }
    
  }

  cancelUpdate(event: any){
    this.username = this.currentUser.username;
    this.birthdate = this.currentUser.birthdate;
    this.age = this.currentUser.age;
    this.email = this.currentUser.email;
  }

  submitChange(event: any){
    this.currentUser.age = this.age;
    this.currentUser.birthdate = this.birthdate;
    this.currentUser.email = this.email;
    this.currentUser.username = this.username;
    this.authService.setCurrentUser(this.currentUser)
  }
}
