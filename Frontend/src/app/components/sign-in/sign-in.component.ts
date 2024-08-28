import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  userDataForm: FormGroup = this.formBuilder.group({
    email: [
      '',
      [Validators.required, Validators.email],  
    ],
    password: [
      '',
      [Validators.required,
      Validators.pattern(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      )],
    ],
  });
  constructor(private formBuilder: FormBuilder){}

  saveUser(){
    console.log(this.userDataForm.value);
    this.userDataForm.reset();
  }
}
