import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { PayComponent } from './pay/pay.component';
import { RegisterComponent } from './register/register.component';
import { AgreementComponent } from './serve/agreement/agreement.component';
import { CheckoutComponent } from './serve/checkout/checkout.component';
import { ReportComponent } from './serve/report/report.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'news', component: NewsComponent
  },
  {
    path: 'serve/report',component: ReportComponent
  },
  {
    path: 'serve/agreement', component: AgreementComponent
  },
  {
    path: 'serve/checkout', component: CheckoutComponent
  },
  {
    path: 'booking', component: BookingComponent
  },
  {
    path: 'pay', component: PayComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'admin', component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
