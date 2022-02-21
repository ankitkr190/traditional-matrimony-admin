import { FemaleComponent } from './female/female.component';
import { MaleComponent } from './male/male.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
    GenderRoutingModule,
    HttpClientModule
  ]
})
export class GenderModule { }
