import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../../../models/user';
import { UserManagementService } from '../../../../shared/user-management.service';

@Component({
  selector: 'app-add-suivi',
  templateUrl: './add-suivi.component.html',
  styleUrls: ['./add-suivi.component.sass']
})
export class AddSuiviComponent implements OnInit {

  constructor(private userSerivice: UserManagementService) { }
  patientList: User[];


    nomPatient: any ;
    
    nbrSeances :any;
    
    dateDebut: any;
    dateFin:any;
    
    username:any;
 
  ngOnInit(): void {
    this.userSerivice.getUsersList().subscribe((data: User[]) => {
      data = data.filter(user => user.roles[0].name == "ROLE_ADMIN");
      this.patientList = data;
      console.log(data)
    })
  

  
}
addSuivi() {
   
}
}