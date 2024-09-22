import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-university',
  templateUrl: './sign-up-university.component.html',
  styleUrls: ['./sign-up-university.component.scss']  // Fixed 'styleUrl' to 'styleUrls'
})
export class SignUpUniversityComponent {
  profileName: string = '';
  username: string = '';
  password: string = '';
  text: string = '';

  userDataForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, // Move FormBuilder to the top
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.userDataForm = this.formBuilder.group({
      profileName: [
        '',
        [Validators.required, Validators.maxLength(100), Validators.minLength(3)],
      ],
      username: [
        '',
        [Validators.required, Validators.maxLength(20), Validators.minLength(3),
          Validators.pattern(/^\S+$/)],
      ],
      password: [
        '',
        [Validators.required,
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)],
      ],
    });
  }

  saveUser() {
    console.log(this.userDataForm.value);
    this.userDataForm.reset();
  }

  registerUniversity(): void {
    this.authService.registerUniversity(this.profileName, this.username, this.password).subscribe({
      next: (response: any) => {
        this.text = '';
        this.router.navigate(['']);
      },
      error: (error: any) => {
        this.text = error.error.message;
      },
      complete: () => {
        console.log('done');
      }
    });
  }
}
