import { Component, OnInit } from '@angular/core';
import {DoctorModel} from '../models/doctor.model';
import {DoctorsService} from '../services/doctors.service';
import {AuthService} from '../services/auth.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doctors',
  templateUrl: './my-doctors.component.html',
  styleUrls: ['./my-doctors.component.css']
})
export class MyDoctorsComponent implements OnInit {

  faSearch = faSearch;
  doctors: DoctorModel[] = [];
  doctorsFilters = {name: '', specialty: ''};


  constructor(private doctorsService: DoctorsService, public authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.user){
      this.doctorsService.getPatientDoctors(this.authService.user.profile?._id).then(res => {
        this.doctors = res;
      });
    }
  }

  public filter(): void {
    if (!this.authService.user) return;
    this.doctorsService.filterPatientDoctors(this.authService.user.profile?._id, this.doctorsFilters).then(res => {
      this.doctors = res;
    });
  }

}
