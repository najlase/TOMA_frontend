import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class ConnectionService {
    constructor(private httpClient: HttpClient, private authService: AuthService) {}

    sendConnectionRequest(doctorId: string): Promise<any> {
        return this.httpClient.post<any>(`http://localhost:3000/api/patient/${this.authService.user?.profile._id}/connect/doctor/${doctorId}`,
            {}, {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
    }

    removeConnectionRequest(doctorId: string): Promise<any> {
        return this.httpClient.delete<any>(`http://localhost:3000/api/patient/${this.authService.user?.profile._id}/connect/doctor/${doctorId}`,
            {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
    }

    acceptConnectionRequest(patientId: string): Promise<any> {
        return this.httpClient.get<any>(`http://localhost:3000/api/doctor/requests/accept/${patientId}`,
            {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
    }

    rejectConnectionRequest(patientId: string): Promise<any> {
        return this.httpClient.get<any>(`http://localhost:3000/api/doctor/requests/reject/${patientId}`,
            {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
    }

    removeConnection(doctorId: string): Promise<any> {
        return this.httpClient.delete<any>(`http://localhost:3000/api/patient/connections/doctor/${doctorId}`,
            {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
    }
}
