import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-of-user',
  templateUrl: './type-of-user.component.html',
  styleUrl: './type-of-user.component.scss'
})
export class TypeOfUserComponent {

  constructor(private router: Router) {}

  onSignup(userType: string) {
    if (userType === 'student') {
      this.router.navigate(['/signup/student']);
    } else if (userType === 'university') {
      this.router.navigate(['/signup/university']);
    }
  }
}
