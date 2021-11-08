import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from '../../models/reclamation';
import { User } from '../../models/user';
import { UserManagementService } from '../../shared/user-management.service';

@Component({
  selector: 'app-updatereclamation',
  templateUrl: './updatereclamation.component.html',
  styleUrls: ['./updatereclamation.component.sass']
})
export class UpdatereclamationComponent implements OnInit {
  constructor(private userSerivice: UserManagementService,
    private route: ActivatedRoute,
    private navigation: Router)  { }

  doctor: User;
  recl : Reclamation;
  updateForm = new FormGroup({
    type: new FormControl(""),
    description: new FormControl("")
  })
 

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
  updateReclamation(id: any) {
console.log(id)
    this.userSerivice.updateClaim(id, this.recl).subscribe(data => {
      this.navigation.navigate(["dashboard/patient-management"]);
    })
  }
}
