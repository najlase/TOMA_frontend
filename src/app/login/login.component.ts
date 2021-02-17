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
  password = '';
  showPassword = 0;
  
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

}
