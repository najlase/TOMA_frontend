import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserModel} from '../models/user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token = '';
  public user?: UserModel;
  constructor(private httpClient: HttpClient, private router: Router) {
    const data = localStorage.getItem('auth-data');
    if (data) {
      const obj = JSON.parse(data);
      this.token = obj.token;
      this.user = obj.user;
    }
  }

  login(email: string, password: string): void {
    this.httpClient.post<any>('http://localhost:3000/api/login', {email, password}).toPromise().then(res => {
      this.token = res.token;
      this.user = res.user;
      localStorage.setItem('auth-data', JSON.stringify(res));
      console.log(this.user);
      if (this.user?.role === 'Doctor'){
        this.router.navigate(['/doctor/dashboard']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  logout(): void{
    localStorage.removeItem('auth-data');
    this.token = '';
    this.user = undefined;
    this.router.navigate(['/login']);
  }
}
