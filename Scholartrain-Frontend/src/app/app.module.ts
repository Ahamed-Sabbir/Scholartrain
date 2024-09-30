import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimelineComponent } from './features/timeline/timeline.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignUpUniversityComponent } from './pages/sign-up-university/sign-up-university.component';
import { TypeOfUserComponent } from './pages/type-of-user/type-of-user.component';
import { TimelineUniversityComponent } from './features/timeline-university/timeline-university.component';
import { PostComponent } from './features/post/post.component';
import { ScholarshipDetailsComponent } from './features/scholarship-details/scholarship-details.component';
import { CreateScholarshipComponent } from './features/create-scholarship/create-scholarship.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './services/auth.interceptor';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MultiSelectModule } from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatedScholarshipListComponent } from './features/created-scholarship-list/created-scholarship-list.component';
import { CreatedScholarshipDetailsComponent } from './features/created-scholarship-details/created-scholarship-details.component';
import { AppliedStudentListComponent } from './features/applied-student-list/applied-student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimelineComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    SignUpUniversityComponent,
    TypeOfUserComponent,
    TimelineUniversityComponent,
    PostComponent,
    ScholarshipDetailsComponent,
    CreateScholarshipComponent,
    CreatedScholarshipListComponent,
    CreatedScholarshipDetailsComponent,
    AppliedStudentListComponent,
],
bootstrap: [AppComponent], 
imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    MultiSelectModule,
    BrowserAnimationsModule,
], 
providers: [
    provideHttpClient(withInterceptors([authInterceptor]))
] 
})
export class AppModule { }
