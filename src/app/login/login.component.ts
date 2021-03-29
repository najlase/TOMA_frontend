import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  firstName = '';
  lastName = '';
  birthday = new Date();
  password = '';
  confirmPassword = '';
  showPassword = 0;
  isCreate = false;
  isNext = false;
  
  constructor(private authService: AuthService, private router: Router) {
    if (authService.user) {
      console.log(authService.user);
      if (authService.user.role === 'Doctor'){
        this.router.navigate(['/doctor/dashboard']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    }
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.email, this.password);
  }
  createAccount(): void {
    if (this.password == this.confirmPassword) 
      this.authService.createAccount(this.email, this.password, this.firstName, this.lastName, this.birthday);
  }

  loadCreateForm(): void {
    this.isCreate = true;
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
