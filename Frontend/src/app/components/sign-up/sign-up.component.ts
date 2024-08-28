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
    fathersName:[
      '',
      [Validators.required, Validators.maxLength(20), Validators.minLength(3)],
    ],
    mothersName:[
      '',
      [Validators.required, Validators.maxLength(20), Validators.minLength(3)],
    ],
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
    dob: [
      '', 
      [Validators.required],
    ],
    phone: [
      '+88', 
      [Validators.required, Validators.maxLength(14), Validators.pattern(/^(\+8801[3-9]\d{8})$/)]
    ],
    presentAddress: [
      '', 
      [Validators.required],
    ],
    permanentAddress: [
      '', 
      [Validators.required],
    ],
    image: [
      null,
    ],
    gender: [
      '', 
      [Validators.required],
    ],
    areaOfEducation: [
      '', [Validators.required],
    ],
    institute: [
      '', 
      [Validators.required],
    ],
    subject: [
      '', 
      [Validators.required],
    ],
    cgpa: [
      '', 
      [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
    ],
    resume: [
      null,
    ],
  });
  constructor(private formBuilder: FormBuilder){}

  saveUser(){
    console.log(this.userDataForm.value);
    this.userDataForm.reset();
  }
}
