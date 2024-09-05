import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  constructor(
    private router: Router,
    protected authService: AuthServiceService,
  ){}

  logout(): void{
    this.authService.logout();
    this.router.navigate(['']);
  }

}
