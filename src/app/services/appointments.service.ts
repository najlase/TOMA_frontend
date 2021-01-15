import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppointmentModel} from '../models/appointment.model';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  getAllAsPatient(): Promise<any> {
    console.log(this.authService.user);
    return this.httpClient.get<any>('http://localhost:3000/api/patient/' + this.authService.user?.profile._id + '/appointments',
      {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }

  getAllAsTeacher(): Promise<AppointmentModel[]> {
    return this.httpClient.get<AppointmentModel[]>('http://localhost:3000/api/teacher/appointments',
      {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }

  claimAsStudent(appointmentId: string): Promise<AppointmentModel[]> {
    return this.httpClient.get<AppointmentModel[]>('http://localhost:3000/api/patient/appointments/' + appointmentId + '/claim',
      {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }

  remove(appointmentId: string): Promise<any> {
    return this.httpClient.delete('http://localhost:3000/api/patient/claims/:id/:userId' + appointmentId + '/claim',
      {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }
}
