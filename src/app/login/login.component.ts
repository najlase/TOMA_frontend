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
  constructor(private authService: AuthService, private router: Router) {
    if (authService.user) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.email, this.password);
  }

}
