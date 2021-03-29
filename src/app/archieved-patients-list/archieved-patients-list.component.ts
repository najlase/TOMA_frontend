import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../services/doctors.service';

@Component({
  selector: 'app-archieved-patients-list',
  templateUrl: './archieved-patients-list.component.html',
  styleUrls: ['./archieved-patients-list.component.css']
})
export class ArchievedPatientsListComponent implements OnInit {

  archieves: any[] = [];

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.doctorsService.getArchievedPatients().then( res =>{
      this.archieves = res;
    });
  }

}
