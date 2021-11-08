import { User } from './../models/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Reclamation } from '../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  apiUrl = "http://localhost:9002/";
  apiUrlReclamation = "http://localhost:8087/";

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<any> {
    return this.http.get(this.apiUrl + "api/admin/users", { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("user_token") }) }).pipe(
      catchError(this.handleError)
    );
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + "api/admin/users/" + id, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("user_token") }) }).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.http.put(this.apiUrl + "api/admin/users/" + id, user, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("user_token") }) }).pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + "api/admin/users/" + id, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("user_token") }) }).pipe(
      catchError(this.handleError)
    );
  }

  addPatientAppointement(idPatient, idDoctor, appointementDate: Observable<any>) {
    return this.http.post(this.apiUrl + "api/admin/" + idPatient + "/doctors/" + idDoctor + "?appointementDate=" + appointementDate, {}, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("user_token") }) }).pipe(
      catchError(this.handleError)
    );
  }


  getDoctorAppointement(idDoctor) {
    return this.http.get("http://localhost:9003/api/appointement/doctor/" + idDoctor).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
  
  addDoctorReclamation(idPatient, idDoctor, type: Observable<any>, description: Observable<any>) {
    return this.http.post(this.apiUrlReclamation + "api/Reclamation/addDoctorClaim/" + idPatient + "/" + idDoctor + "?type=" + type + "&description=" + description, {}, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("user_token") }) }).pipe(
      catchError(this.handleError)
    );
  }
  getClaimsList(): Observable<any> {
    return this.http.get(this.apiUrlReclamation + "api/Reclamation", { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("user_token") }) }).pipe(
      catchError(this.handleError)
    );
  }
  deleteReclamation(id: number): Observable<any> {
    return this.http.delete(this.apiUrlReclamation + "api/Reclamation/" + id, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("user_token") }) }).pipe(
      catchError(this.handleError)
    );
  }
  getReclamtionByIdDoctor(id: number): Observable<any> {
    return this.http.get(this.apiUrlReclamation + "api/Reclamation/findByIddoc/" + id, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("user_token") }) }).pipe(
      catchError(this.handleError)
    );
  }
  updateClaim(id: number, rec: Reclamation): Observable<any> {
    return this.http.put(this.apiUrlReclamation + "api/Reclamation/" + id, rec, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("user_token") }) }).pipe(
      catchError(this.handleError)
    );
  }
}
