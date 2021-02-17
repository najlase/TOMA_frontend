import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  confirmedPassword: string = "";

  constructor(public authService: AuthService, private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  saveProfile(): void {
    if (this.password == this.confirmedPassword)
      this.profileService.updateProfile({firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password})
      .then(res => this.authService.user = res)
    else
      console.log("error");
  }

}
