import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ConnectionService } from '../services/connection.service';
import { DoctorsService } from '../services/doctors.service';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  invitations: any[] = [];

  constructor(private doctorsService: DoctorsService, private patientsService: PatientsService, public authService: AuthService, private connectionService: ConnectionService) { }

  ngOnInit(): void {
    if (this.authService.user?.role == "Doctor") {
      this.doctorsService.getInvitations().then(res => {
        this.invitations = res;
      });
    }
    else {
      this.patientsService.getInvitations().then(res => {
        this.invitations = res;
      });
    }
  }
  
  acceptInvitation(invitation: any): void {
    this.connectionService.acceptConnectionRequest(invitation.patient._id).then(() => {
      console.log("success");
    })
  }

  rejectInvitation(invitation: any): void {
    this.connectionService.rejectConnectionRequest(invitation.patient._id).then(() => {
      console.log("success");
    })
  }

}
