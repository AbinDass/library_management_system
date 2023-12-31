import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { BorrowedComponent } from './components/borrowed/borrowed.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'home', component:HomeComponent},
  {path:'borrowed', component:BorrowedComponent},
  {path:'profile', component:ProfileComponent},
  {path:'updateprofile', component:UpdateprofileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
