import { Component, OnInit } from '@angular/core';
import {DoctorModel} from '../models/doctor.model';
import {DoctorsService} from '../services/doctors.service';
import {AuthService} from '../services/auth.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppointmentsService } from '../services/appointments.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './my-doctors.component.html',
  styleUrls: ['./my-doctors.component.css']
})
export class MyDoctorsComponent implements OnInit {

  appointmentInfo={date: null, note: '', doctorId: ''};
  message = '';
  error = '';
  faSearch = faSearch;
  doctors: DoctorModel[] = [];
  doctorsFilters = {name: '', specialty: ''};


  constructor(private doctorsService: DoctorsService, public authService: AuthService, private appointmentService: AppointmentsService) { }

  ngOnInit(): void {
    if (this.authService.user){
      this.doctorsService.getPatientDoctors(this.authService.user.profile?._id).then(res => {
        this.doctors = res;
      });
    }
  }

  public confirm(): void {
    if(!this.appointmentInfo.date){
      this.error = 'You must specify a date for the appointment.'
      setTimeout(() => this.error = '', 3000);
      return ;
    }
    this.appointmentService.createAppointment(this.appointmentInfo).then(res => {
      this.message = 'Appointment created successfully';
      setTimeout(() => this.message = '', 3000);
    });
  }
  public filter(): void {
    if (!this.authService.user) return;
    this.doctorsService.filterPatientDoctors(this.authService.user.profile?._id, this.doctorsFilters).then(res => {
      this.doctors = res;
    });
  }

}
