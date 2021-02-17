import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MyDoctorsComponent } from './my-doctors/my-doctors.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DoctorAppointmentsListComponent } from './doctor-appointments-list/doctor-appointments-list.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsListComponent,
    MyDoctorsComponent,
    ProfileComponent,
    LoginComponent,
    DoctorAppointmentsListComponent,
    AllDoctorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
