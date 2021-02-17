import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppointmentsListComponent} from './appointments-list/appointments-list.component';
import {MyDoctorsComponent} from './my-doctors/my-doctors.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './services/auth-guard.service';
import {DoctorAppointmentsListComponent} from './doctor-appointments-list/doctor-appointments-list.component';
import {AllDoctorsComponent} from './all-doctors/all-doctors.component';

const routes: Routes = [
  {path: 'dashboard', component: AppointmentsListComponent, canActivate: [AuthGuard]},
  {path: 'my-doctors', component: MyDoctorsComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'my-patients', component: AppointmentsListComponent, canActivate: [AuthGuard]},
  {path: 'doctors', component: AllDoctorsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},

  {path: 'doctor/dashboard', component: DoctorAppointmentsListComponent, canActivate: [AuthGuard]},

  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
