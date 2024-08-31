import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpUniversityComponent } from './components/sign-up-university/sign-up-university.component';
import { TypeOfUserComponent } from './components/type-of-user/type-of-user.component';

const routes: Routes = [
  {
    path:'',
    component:SignInComponent,
  },
  {
    path:'dashboard',
    component:TimelineComponent,
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
