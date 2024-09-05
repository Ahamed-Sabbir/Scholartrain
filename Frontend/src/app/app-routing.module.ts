import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './features/timeline/timeline.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignUpUniversityComponent } from './pages/sign-up-university/sign-up-university.component';
import { TypeOfUserComponent } from './pages/type-of-user/type-of-user.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    component:SignInComponent,
  },
  {
    path:'dashboard',
    component:TimelineComponent,
    canActivate:[AuthGuardService],
  },
  {
    path:'signup/student',
    component:SignUpComponent,
  },
  {
    path:'signup/university',
    component:SignUpUniversityComponent,
  },
  {
    path:'signup',
    component:TypeOfUserComponent,
  },
  {
    path: '**',
    component:SignInComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
