import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DoctorModel} from '../models/doctor.model';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  getPatientDoctors(patientId: string): Promise<DoctorModel[]> {
    return this.httpClient.get<DoctorModel[]>('http://localhost:3000/api/patient/' + patientId + '/my-doctors',
      {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }

  getAll(): Promise<DoctorModel[]> {
    return this.httpClient.get<DoctorModel[]>('http://localhost:3000/api/doctors',
      {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }

  getInvitations(): Promise<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/api/doctor/requests',
      {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }

  filter(filterData: any): Promise<DoctorModel[]> {
    return this.httpClient.post<DoctorModel[]>('http://localhost:3000/api/doctors/filter', filterData,
        {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }

  filterPatientDoctors(patientId: string, filterData: any): Promise<DoctorModel[]> {
    return this.httpClient.post<DoctorModel[]>('http://localhost:3000/api/patient/' + patientId + '/my-doctors/filter', filterData,
        {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }
}
