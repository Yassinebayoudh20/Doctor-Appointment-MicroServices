
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserManagementService } from '../../../shared/user-management.service';

@Component({
  selector: 'app-reclamation-management',
  templateUrl: './reclamation-management.component.html',
  styleUrls: ['./reclamation-management.component.sass']
})
export class ReclamationManagementComponent implements OnInit {

  constructor(private userSerivice: UserManagementService) { }

  doctorsList: User[];

  ngOnInit(): void {
    this.userSerivice.getUsersList().subscribe((data: User[]) => {
      data = data.filter(user => user.roles[0].name == "ROLE_DOCTOR");
      this.doctorsList = data;
    })
  }

}
