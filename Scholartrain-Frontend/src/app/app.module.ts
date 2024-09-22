import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimelineComponent } from './features/timeline/timeline.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignUpUniversityComponent } from './pages/sign-up-university/sign-up-university.component';
import { TypeOfUserComponent } from './pages/type-of-user/type-of-user.component';
import { TimelineUniversityComponent } from './features/timeline-university/timeline-university.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PostComponent } from './features/post/post.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

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
    ],
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        InfiniteScrollModule,
    ], 
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
