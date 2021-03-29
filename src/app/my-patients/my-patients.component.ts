import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../services/doctors.service';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.css']
})
export class MyPatientsComponent implements OnInit {

  patients: any[] = [];

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.doctorsService.getPatients().then( res =>{
      this.patients = res;
    });
  }

}
