import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { Reclamation } from '../../../models/reclamation';
import { UserManagementService } from '../../../shared/user-management.service';

@Component({
  selector: 'app-get-claims-management',
  templateUrl: './get-claims-management.component.html',
  styleUrls: ['./get-claims-management.component.sass']
})
export class GetClaimsManagementComponent implements OnInit {

  

  constructor(private userSerivice: UserManagementService,private route : Router) { }

  claimsList: Reclamation[];

  ngOnInit(): void {
    this.userSerivice.getClaimsList().subscribe((data: Reclamation[]) => {
      
      this.claimsList = data;
    })
  }
  deletclaim(id: number) {
    var yes = confirm("Do you really want to delete this claim ?");
    if (yes == true) {
      this.userSerivice.deleteReclamation(id).subscribe(data=>{
        let claim = this.claimsList.find(c=>c._id==id)
      let indexOfclaim = this.claimsList.indexOf(claim);
      this.claimsList.splice(indexOfclaim, 1);
     
    })}

  }

}
