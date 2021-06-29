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
    return this.httpClient.get<any>('http://localhost:3000/api/patient/' + this.authService.user?.profile?._id + '/appointments',
      {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }

  filterAsPatient(filterData: any): Promise<any> {
    return this.httpClient.post<any>('http://localhost:3000/api/patient/' + this.authService.user?.profile?._id + '/appointments/filter', filterData,
        {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }

  createAppointment(appointmentInfo: any): Promise<any> {
    return this.httpClient.post<any>('http://localhost:3000/api/appointments/make', appointmentInfo,
        {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }
  

  getAllAsDoctor(): Promise<AppointmentModel[]> {
    console.log(this.authService.user);
    return this.httpClient.get<any>('http://localhost:3000/api/doctor/' + this.authService.user?.profile?._id + '/appointments',
      {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }

  confirm(id: string): Promise<AppointmentModel> {
    return this.httpClient.post<any>('http://localhost:3000/api/appointments/' + id + '/confirm',
      {}, {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }

  reject(id: string): Promise<AppointmentModel> {
    console.log(this.authService.user);
    return this.httpClient.post<any>('http://localhost:3000/api/appointments/' + id + '/reject',
      {}, {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }

}
