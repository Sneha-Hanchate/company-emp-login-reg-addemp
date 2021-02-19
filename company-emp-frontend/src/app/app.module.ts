import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
// import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegComponent } from './reg/reg.component';
import { ViewComponent } from './view/view.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AddempComponent } from './addemp/addemp.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { arrRouting } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogComponent } from './log/log.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,

    RegComponent,
    ViewComponent,
    EmplistComponent,
    AddempComponent,
    LogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    arrRouting,
    BrowserAnimationsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
