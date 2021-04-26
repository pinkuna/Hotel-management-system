import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AgreementComponent } from './serve/agreement/agreement.component';
import { ReportComponent } from './serve/report/report.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'news', component: NewsComponent
  },
  {
    path: 'serve/report',component: ReportComponent
  },
  {
    path: 'serve/agreement', component: AgreementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
