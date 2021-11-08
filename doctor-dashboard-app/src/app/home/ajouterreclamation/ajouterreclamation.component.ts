
import { AuthService } from './../../shared/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePickerComponent } from 'ng2-date-picker';

import { User } from '../../models/user';
import { UserManagementService } from '../../shared/user-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../interface/IUser';


@Component({
  selector: 'app-ajouterreclamation',
  templateUrl: './ajouterreclamation.component.html',
  styleUrls: ['./ajouterreclamation.component.sass']
})
export class AjouterreclamationComponent implements OnInit {

  user: User;
  currentUser: IUser;
  appDate: any;
  type: any;
  description: any;

  constructor(private userManService: UserManagementService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private navigation: Router) {

  }

  ngOnInit(): void {
    this.currentUser = this.auth.currentUser;
    console.log(this.currentUser)
    const id = this.route.snapshot.params.id;
    this.userManService.getUserById(id).subscribe(data => {
      this.user = data
    });
  }

  addClaim() {
    this.userManService.addDoctorReclamation(this.auth.currentUser.id, this.route.snapshot.params.id, this.type, this.description).subscribe(data => {
      this.navigation.navigate(['dashboard/patient-management/reclamation-management'])
    });
  }



}
