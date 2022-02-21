import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:"gender",loadChildren:()=>import("./Gender/gender.module").then(mod=>mod.GenderModule) },

  {path:"dashboard",component:DashboardComponent},
  {path:"location",component:LocationComponent},
  {path:"login",component:LoginComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
