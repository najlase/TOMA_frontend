import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ClaimModel} from '../models/claim.model';
import {AppointmentModel} from '../models/appointment.model';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  getAllAsStudent(): Promise<ClaimModel[]> {
    return this.httpClient.get<ClaimModel[]>('http://localhost:3000/api/patient/claims',
      {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }

  getAllAsTeacher(): Promise<ClaimModel[]> {
    return this.httpClient.get<ClaimModel[]>('http://localhost:3000/api/teacher/claims',
      {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }

  unclaimAsStudent(appointmentId: number): Promise<any> {
    return this.httpClient.delete<any>('http://localhost:3000/api/patient/claims/' + appointmentId,
      {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }
}
