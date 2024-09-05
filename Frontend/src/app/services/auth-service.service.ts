import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://localhost:8080/auth/api';
  private tokenKey = 'authToken';
  private tokenuser = 'username';

  constructor(private http: HttpClient, private router:Router) { }

  // Registration Student
  registerStudent(profileName: string, username: string, password: string): Observable<any> {
    const body = { profileName, username, password };
    return this.http.post(`${this.baseUrl}/student/registration`, body);
  }

  // Registration University  
  registerUniversity(profileName: string, username: string, password: string): Observable<any> {
    const body = { profileName, username, password };
    return this.http.post(`${this.baseUrl}/university/registration`, body);
  }

  // Login
  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }

  // Logout (remove the JWT token)
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.tokenuser);
    this.router.navigate(['']); // Redirect to login after logout
  }

  // Save the JWT token to localStorage
  setToken(token: string, profileName: string): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.tokenuser, profileName);
  }

  // Retrieve the JWT token from localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getProfileName(): string | null{
    return localStorage.getItem(this.tokenuser);
  }

  gotToken(): boolean{
    if(this.getToken()!=null)return true;
    return false;
  }

  // Check if the user is authenticated using the validation API
  isTokenOkay(): void {
    const token = this.getToken();
    if (token == null) {
      console.log('first time visit');
    }
    else{
      const params = new HttpParams().set('token', token);
      this.http.post<{isValid: boolean}>(`${this.baseUrl}/validateToken`,null, {params}).pipe(
        map(response =>{
          if(response.isValid){
            console.log('ok ok token ok');
          }
          else{
            // console.log(token);
            localStorage.removeItem(this.tokenKey);
            localStorage.removeItem(this.tokenuser);
            console.log('no no token not ok');
          }
        }),
        catchError(() => {
          localStorage.removeItem(this.tokenKey);
          localStorage.removeItem(this.tokenuser);
          console.log('no no token not ok');
          return EMPTY;
        })
      ).subscribe();
    }
  }
}
