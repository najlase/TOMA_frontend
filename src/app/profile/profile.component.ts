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
  profilePicture: string = "";
  showPictureUpload: boolean = false;
  showPictureLink: boolean = false;
  error: string = " ";
  success: string = " ";

  constructor(public authService: AuthService, private profileService: ProfileService) {
    if (authService.user) {
      this.firstName = authService.user.profile.firstName;
      this.lastName = authService.user.profile.lastName;
      this.email = authService.user.email;
      this.profilePicture = authService.user.profile.img;
    }
  }

  ngOnInit(): void {
  }

  saveProfile(): void {
    this.error = " ";
    if (this.password == this.confirmedPassword)
      this.profileService.updateProfile({ firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password, profilePicture: this.profilePicture })
        .then(res => {
          this.authService.user = res
          this.success = "Profile updated sucessfully"
          setTimeout(()=>this.success = " ", 3000)
        })
    else
      this.error = "passwords don't match, please reenter password";
  }

  handleFileInput(event: any) {
    let self = this;
    let reader = new FileReader();
    reader.readAsDataURL(event.target?.files[0]);
    reader.onload = function () {
      console.log(reader.result);
      self.profilePicture = reader.result?.toString() ?? "";
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

}
