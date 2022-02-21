import { FemaleComponent } from './female/female.component';
import { MaleComponent } from './male/male.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenderRoutingModule } from './gender-routing.module';


@NgModule({
  declarations: [
    MaleComponent,
    FemaleComponent
  ],
  imports: [
    CommonModule,
    GenderRoutingModule
  ]
})
export class GenderModule { }
