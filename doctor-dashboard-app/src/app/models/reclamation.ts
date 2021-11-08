export class Reclamation {
     _id : Number;
    patientId: Number;
    type: String;
    contentId: Number;
    description: String;
    doctorId: Number;
    dateReclamation: Date;
  
    constructor(_id,patientId, type, description,doctorId) {
      this._id=_id;
      this.patientId = patientId;
      this.type = type;

      this.description = description;
      this.doctorId = doctorId;

    }
  }
  