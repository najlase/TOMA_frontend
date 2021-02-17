
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from './auth.service';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  updateProfile(profileData: any): Promise<UserModel> {
    return this.httpClient.patch<UserModel>('http://localhost:3000/api/patient/'+ this.authService.user?._id + '/profile', profileData, 
      {headers: { Authorization: 'Bearer ' + this.authService.token}}).toPromise();
  }


}
