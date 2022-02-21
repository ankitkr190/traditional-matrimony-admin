import { FemaleComponent } from './female/female.component';
import { MaleComponent } from './male/male.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenderRoutingModule } from './gender-routing.module';
import { ViewProfileComponent } from './view-profile/view-profile.component';


@NgModule({
  declarations: [
    MaleComponent,
    FemaleComponent,
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    GenderRoutingModule
  ]
})
export class GenderModule { }
