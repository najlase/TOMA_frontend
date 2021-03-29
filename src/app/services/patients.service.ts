import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getInvitations(): Promise<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/api/patient/requests',
      {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }
}
