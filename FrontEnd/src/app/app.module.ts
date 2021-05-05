import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProgressComponent } from './progress/progress.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MatCardModule } from '@angular/material/card';
import { ReportComponent } from './serve/report/report.component';
import { AgreementComponent } from './serve/agreement/agreement.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './serve/checkout/checkout.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BookingComponent } from './booking/booking.component';
import { PayComponent } from './pay/pay.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { MatTableModule } from '@angular/material/table';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AdminCheckoutComponent } from './admin-checkout/admin-checkout.component';




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
    AdminCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
