import { AuthService } from './shared/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { DpDatePickerModule } from 'ng2-date-picker';


import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';



import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { AuthguardGuard } from './authguard/authguard.guard';
import { UserManagementComponent } from './home/user-management/user-management.component';
import { UpdateUserComponent } from './home/update-user/update-user.component';
import { PatientManagementComponent } from './home/patient-management/patient-management.component';
import { PatientAppoitementComponent } from './home/patient-appoitement/patient-appoitement.component';
import { DoctorManagementComponent } from './home/doctor-management/doctor-management.component';
import { ReclamationManagementComponent } from './home/patient-management/reclamation-management/reclamation-management.component';
import { AjouterreclamationComponent } from './home/ajouterreclamation/ajouterreclamation.component';
import { GetClaimsManagementComponent } from './home/patient-management/get-claims-management/get-claims-management.component';
import { GetClaimByPatientManagementComponent } from './home/patient-management/get-claim-by-patient-management/get-claim-by-patient-management.component';
import { UpdatereclamationComponent } from './home/updatereclamation/updatereclamation.component';
import { GestionOrdonnanceComponent } from './home/doctor-management/gestion-ordonnance/gestion-ordonnance.component';
import { GestionSuiviComponent } from './home/doctor-management/gestion-suivi/gestion-suivi.component';
import { AddSuiviComponent } from './home/doctor-management/gestion-suivi/add-suivi/add-suivi.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    SigninComponent,
    SignupComponent,
    UserManagementComponent,
    UpdateUserComponent,
    PatientManagementComponent,
    PatientAppoitementComponent,
    DoctorManagementComponent,
    ReclamationManagementComponent,
    AjouterreclamationComponent,
    GetClaimsManagementComponent,
    GetClaimByPatientManagementComponent,
    UpdatereclamationComponent,
    GestionOrdonnanceComponent,
    GestionSuiviComponent,
    AddSuiviComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DpDatePickerModule

  ],
  providers: [AuthguardGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
