import { EditProfileComponent } from './Gender/edit-profile/edit-profile.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { UnverifiedComponent } from './unverified/unverified.component';
import { VerifiedComponent } from './verified/verified.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { EducationComponent } from './education/education.component';
import { CasteComponent } from './caste/caste.component';
import { ProfessionComponent } from './profession/profession.component';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:"gender",loadChildren:()=>import("./Gender/gender.module").then(mod=>mod.GenderModule) },

  {path:"dashboard",component:DashboardComponent},
  {path:"location",component:LocationComponent},
  {path:"login",component:LoginComponent},
  {path:"profession",component:ProfessionComponent},
  {path:"caste",component:CasteComponent},
  {path:"education",component:EducationComponent},
  {path:"subscribe",component:SubscribeComponent},
  {path:"unsubscribe",component:UnsubscribeComponent},
  {path:"verified",component:VerifiedComponent},
  {path:"unverified",component:UnverifiedComponent},
  {path:"add-profile",component:AddProfileComponent},
  {path:"edit-profile",component:EditProfileComponent},










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
