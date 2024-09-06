import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorText: string = '';

  userDataForm: FormGroup = this.formBuilder.group({
    username: [
      '',
      [Validators.required],  
    ],
    password:[
      '',
      [Validators.required],
    ]
  });

  constructor(
    private authService: AuthServiceService,
    private formBuilder: FormBuilder, 
    private router: Router,
  ){}

  saveUser(){
    console.log(this.userDataForm.value);
    this.userDataForm.reset();
  }

  ngOnInit(): void {
    // Check if the user is already authenticated and redirect if so
    this.authService.isTokenOkay();
    if(this.authService.getToken() != null){
      this.router.navigate(['/dashboard']); // Redirect to dashboard if already logged in
    }
  }
  
  Login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.authService.setToken(response.token, response.profileName);
        this.router.navigate(['/dashboard']); // Redirect after successful login
      },
      error: (err) => {
        console.error('Login failed', err);
        this.errorText = 'Invalid Credential';
      }
    });
  }

}
