import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPageComponent } from './my-page/my-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { AgentsComponent } from './agents/agents.component';
import { NewLoadComponent } from './new-load/new-load.component';
import { PayrollComponent } from './payroll/payroll.component';
import { MyAcountComponent } from './my-acount/my-acount.component';
import { LoadComponent } from './load/load.component';
import { GpsComponent } from './gps/gps.component';
import { InsuranceComponent } from './insurance/insurance.component';
import {AngularYandexMapsModule} from 'angular8-yandex-maps';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MyPageComponent,
    LogInComponent,
    AgentsComponent,
    NewLoadComponent,
    PayrollComponent,
    MyAcountComponent,
    LoadComponent,
    GpsComponent,
    InsuranceComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularYandexMapsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
