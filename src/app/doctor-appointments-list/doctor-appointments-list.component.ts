import { Component, OnInit } from '@angular/core';
import {AppointmentModel} from '../models/appointment.model';
import {faCheck, faChevronDown, faChevronUp, faSearch, faStar} from '@fortawesome/free-solid-svg-icons';
import {AppointmentsService} from '../services/appointments.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-doctor-appointments-list',
  templateUrl: './doctor-appointments-list.component.html',
  styleUrls: ['./doctor-appointments-list.component.css']
})
export class DoctorAppointmentsListComponent implements OnInit {

  faStar = faStar;
  faSearch = faSearch;
  faCheck = faCheck;
  faDetails = faChevronDown;
  faDetailsOff = faChevronUp;

  appointments: AppointmentModel[] = [];
  isDetailedView: boolean[] = [];
  starredAppointments: string[] = [];
  appointmentsFilters = {patientName: '', start_date: null, end_date: null, reduction: 0, doctor: -1, specialty: ''};

  myApplications = [];
  constructor(private appointmentsService: AppointmentsService, public authService: AuthService) {
  }

  ngOnInit() {
    this.appointmentsService.getAllAsDoctor().then(res => {
      console.log(res);
      this.appointments = res;
    });
  }

  filter(): void{
    // this.appointmentsService.filter(this.appointmentsFilters).then(res => {
    //   this.appointments = res;
    // });
  }

  confirm(index: number): void {
    this.appointmentsService.confirm(this.appointments[index]._id).then(res => {
      this.appointments[index].status = res.status;
    });
  }

  reject(index: number): void {
    this.appointmentsService.reject(this.appointments[index]._id).then(res => {
      this.appointments[index].status = res.status;
    });
  }

  alreadyApplied(index: number): boolean {
    // const x = this.myApplications.filter(app => app.AppointmentId === this.appointments[index]._id);
    // return x.length > 0;
    return false;
  }

  toggleDetails(index: number): void
  {
    this.isDetailedView[index] = !this.isDetailedView[index];
  }

  star(index: number): void
  {
    // this.appointmentsService.star(this.appointments[index]._id).then(res => {
    //   const i = this.starredAppointments.findIndex(el => el === this.appointments[index]._id);
    //   console.log(i);
    //   if(i === -1){
    //     this.starredAppointments.push(this.appointments[index]._id);
    //   }
    //   else{
    //     this.starredAppointments.splice(i, 1);
    //   }
    // })
  }

  isStarred(index: number): boolean{
    return this.starredAppointments && this.starredAppointments.includes(this.appointments[index]._id);
  }

}
