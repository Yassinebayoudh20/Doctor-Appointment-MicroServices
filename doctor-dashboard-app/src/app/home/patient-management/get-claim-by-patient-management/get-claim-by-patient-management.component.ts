import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from '../../../models/reclamation';
import { User } from '../../../models/user';
import { UserManagementService } from '../../../shared/user-management.service';

@Component({
  selector: 'app-get-claim-by-patient-management',
  templateUrl: './get-claim-by-patient-management.component.html',
  styleUrls: ['./get-claim-by-patient-management.component.sass']
})
export class GetClaimByPatientManagementComponent implements OnInit {

  constructor(private userSerivice: UserManagementService,
    private route: ActivatedRoute,
    private navigation: Router)  { }

  doctor: User;
  recl : Reclamation;
 

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.userSerivice.getUserById(id).subscribe(data => {
      this.doctor = data
      console.log(data)
    });
    this.userSerivice.getReclamtionByIdDoctor(id).subscribe(data => {
      this.recl = data[0]
      console.log(this.recl)
    });
  }

}
