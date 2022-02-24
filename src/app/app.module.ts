import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpHeaderResponse } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { ProfessionComponent } from './profession/profession.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CasteComponent } from './caste/caste.component';
import { EducationComponent } from './education/education.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { VerifiedComponent } from './verified/verified.component';
import { UnverifiedComponent } from './unverified/unverified.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { EditProfileComponent } from './Gender/edit-profile/edit-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LocationComponent,
    LoginComponent,
    ProfessionComponent,
    CasteComponent,
    EducationComponent,
    SubscribeComponent,
    UnsubscribeComponent,
    VerifiedComponent,
    UnverifiedComponent,
    AddProfileComponent,
    EditProfileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    //NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
