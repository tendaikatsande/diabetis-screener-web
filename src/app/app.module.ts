import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/layout/components/dashboard/dashboard.component';
import { CookieService } from 'ngx-cookie-service';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgZorroModule } from './modules/ng-zorro-modules';
import { PatientsComponent } from './pages/layout/components/patients/patients.component';
import { AddPatientComponent } from './pages/layout/components/add-patient/add-patient.component';
import { VisitsComponent } from './pages/layout/components/visits/visits.component';
import { ViewPatientComponent } from './pages/layout/components/view-patient/view-patient.component';
import { RecordVisitComponent } from './pages/layout/components/record-visit/record-visit.component';
import { RecordVitalsComponent } from './pages/layout/components/record-vitals/record-vitals.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LayoutComponent,
    DashboardComponent,
    PatientsComponent,
    AddPatientComponent,
    VisitsComponent,
    ViewPatientComponent,
    RecordVisitComponent,
    RecordVitalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NgZorroModule,
  ],
  providers: [CookieService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
