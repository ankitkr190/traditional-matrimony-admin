import { FemaleComponent } from './female/female.component';
import { MaleComponent } from './male/male.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"male",component:MaleComponent},
  {path:"female",component:FemaleComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenderRoutingModule { }
