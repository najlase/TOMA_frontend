import { Component, OnInit } from '@angular/core';
import { faSearch, faUserPlus, faCheck, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import {DoctorModel} from "../models/doctor.model";
import {DoctorsService} from "../services/doctors.service";
import {AuthService} from "../services/auth.service";
import {ConnectionService} from "../services/connection.service";

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent implements OnInit {

  faSearch = faSearch;
  faUserPlus = faUserPlus;
  faCheck = faCheck;
  faSpinner = faSpinner;
  faTimes = faTimes;
  doctorsFilters = {name: '', specialty: ''};

  doctors: DoctorModel[] = [];
  doctorConnectionState: number[] = [];

  constructor(private doctorsService: DoctorsService, private connectionService: ConnectionService,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.doctorsService.getAll().then(res => {
      this.loadDoctors(res);
    });
  }

  private loadDoctors(res: DoctorModel[]): void {
    this.doctors = res;
    for (const doctor of this.doctors)
    {
      if (doctor.patients.indexOf(this.authService.user?.profile?._id) !== -1){
        this.doctorConnectionState.push(2);
      } else if (doctor.patients.indexOf(this.authService.user?.profile?._id) === -1 &&
          doctor.connectionRequests.findIndex(el => el.patient === this.authService.user?.profile._id) !== -1){
        this.doctorConnectionState.push(1);
      } else if (doctor.patients.indexOf(this.authService.user?.profile?._id) === -1 &&
          doctor.connectionRequests.findIndex(el => el.patient === this.authService.user?.profile._id) === -1){
        this.doctorConnectionState.push(0);
      }
    }
  }

  public filter(): void {
    this.doctorsService.filter(this.doctorsFilters).then(res => {
      this.loadDoctors(res);
    });
  }

  public connect(index: number): void {
    this.connectionService.sendConnectionRequest(this.doctors[index]._id).then(_ => {
      this.doctorConnectionState[index] = 1;
    });
  }

  public removeConnectionRequest(index: number): void {
    this.connectionService.removeConnectionRequest(this.doctors[index]._id).then(_ => {
      this.doctorConnectionState[index] = 0;
    });
  }

}
