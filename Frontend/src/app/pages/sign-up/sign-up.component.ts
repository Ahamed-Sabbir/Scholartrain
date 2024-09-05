import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  userDataForm: FormGroup = this.formBuilder.group({
    name: [
      '', 
      [Validators.required, Validators.maxLength(20), Validators.minLength(3)],
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
  constructor(private formBuilder: FormBuilder){}

  saveUser(){
    console.log(this.userDataForm.value);
    this.userDataForm.reset();
  }
}
