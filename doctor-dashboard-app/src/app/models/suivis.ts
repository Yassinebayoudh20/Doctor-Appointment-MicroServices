export class Reclamation {
    id : Number;
    idMedcin: Number;
    nomPatient: String;
    nbrSeances: Number;

   dateFin: Date;
   
   dateDebut: Date;
 
   constructor(id,idMedcin, nomPatient, nbrSeances,dateDebut,dateFin) {
     this.id=id;
     this.idMedcin = idMedcin;
     this.nomPatient = nomPatient;

     this.nbrSeances = nbrSeances;
     this.dateDebut = dateDebut;
     this.dateFin=dateFin;

   }
 }
 