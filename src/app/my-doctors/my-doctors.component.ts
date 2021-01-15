import { Component, OnInit } from '@angular/core';
import {DoctorModel} from '../models/doctor.model';
import {DoctorsService} from '../services/doctors.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './my-doctors.component.html',
  styleUrls: ['./my-doctors.component.css']
})
export class MyDoctorsComponent implements OnInit {

  doctors: DoctorModel[] = [];
  constructor(private doctorsService: DoctorsService, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.user){
      this.doctorsService.getPatientDoctors(this.authService.user.profile._id).then(res => {
        this.doctors = res;
      });
    }
  }

}
