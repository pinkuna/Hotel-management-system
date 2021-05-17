import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProgressComponent } from './progress/progress.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ReportComponent } from './serve/report/report.component';
import { AgreementComponent } from './serve/agreement/agreement.component';
import { CheckoutComponent } from './serve/checkout/checkout.component';
import { BookingComponent } from './booking/booking.component';
import { PayComponent } from './pay/pay.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AdminComponent } from './admin/admin.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AdminCheckoutComponent } from './admin-checkout/admin-checkout.component';
import { AdminUsermangeComponent } from './admin-usermange/admin-usermange.component';
import { AdminReportInfoComponent } from './admin-report-info/admin-report-info.component';
import { AdminPayComponent } from './admin-pay/admin-pay.component';
import { AdminPayInfoComponent } from './admin-pay-info/admin-pay-info.component';

import { MaterialModule } from './material/material.module';


import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { httpInterceptorProviders } from './interceptors';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    ProgressComponent,
    HomeComponent,
    NewsComponent,
    ReportComponent,
    AgreementComponent,
    CheckoutComponent,
    BookingComponent,
    PayComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AdminBookingComponent,
    AdminReportComponent,
    AdminCheckoutComponent,
    AdminUsermangeComponent,
    AdminReportInfoComponent,
    AdminPayComponent,
    AdminPayInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
