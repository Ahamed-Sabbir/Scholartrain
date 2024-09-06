import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-university',
  templateUrl: './sign-up-university.component.html',
  styleUrl: './sign-up-university.component.scss'
})
export class SignUpUniversityComponent {

  profileName: string = '';
  username: string = '';
  password: string = '';
  text: string = '';

  userDataForm: FormGroup = this.formBuilder.group({
    profileName: [
      '', 
      [Validators.required, Validators.maxLength(100), Validators.minLength(3)],
    ],
    username: [
      '', 
      [Validators.required, Validators.maxLength(20), Validators.minLength(3),
        Validators.pattern(
          /^\S+$/
      )],
    ],
    password: [
      '',
      [Validators.required,
      Validators.pattern(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      )],
    ],
  });
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}

  saveUser(){
    console.log(this.userDataForm.value);
    this.userDataForm.reset();
  }

  registerUniversity(): void{
    this.authService.registerUniversity(this.profileName, this.username, this.password).subscribe({
      next: (response) => {
        this.text='';
        this.router.navigate(['']);
      },
      error:(error) => {
        this.text = error.error.message;
      },
      complete: () => {
        console.log('done');
      }
    });
  }
}
