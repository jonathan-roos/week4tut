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

  currentUser = new User()
  username = '';
  birthdate = '';
  age = 0;
  email = '';

  ngOnInit(){
    this.currentUser = JSON.parse(this.authService.getCurrentUser() || '{}');
    this.loggerService.logUser(this.currentUser)
    this.username = this.currentUser.username;
    this.birthdate = this.currentUser.birthdate;
    this.age = this.currentUser.age;
    this.email = this.currentUser.email;
  }
}
