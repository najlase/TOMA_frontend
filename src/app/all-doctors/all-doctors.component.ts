import { Component, OnInit } from '@angular/core';
import { faSearch, faUserPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import {DoctorModel} from "../models/doctor.model";
import {DoctorsService} from "../services/doctors.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent implements OnInit {

  faSearch = faSearch;
  faUserPlus = faUserPlus;
  faCheck = faCheck;
  doctorsFilters = {name: '', specialty: ''};

  doctors: DoctorModel[] = [];

  constructor(private doctorsService: DoctorsService, public authService: AuthService) { }

  ngOnInit(): void {
    this.doctorsService.getAll().then(res => {
      console.log(res);
      this.doctors = res;
    });
  }

  public sendConnectionRequest(index: number): void {

  }

  public filter(): void {
    this.doctorsService.filter(this.doctorsFilters).then(res => {
      this.doctors = res;
    });
  }

}
