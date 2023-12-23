import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { UserComponent } from './user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { HomeComponent } from './components/home/home.component';
import { BorrowedComponent } from './components/borrowed/borrowed.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LandingComponent,
    UserComponent,
    NavbarComponent,
    FooterComponent,
    BookCardComponent,
    HomeComponent,
    BorrowedComponent,
    ProfileComponent,
    UpdateprofileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
