import { ViewProfileComponent } from './view-profile/view-profile.component';
import { FemaleComponent } from './female/female.component';
import { MaleComponent } from './male/male.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"male",component:MaleComponent},
  {path:"female",component:FemaleComponent},
  {path:"view-profile/:id",component:ViewProfileComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenderRoutingModule { }
