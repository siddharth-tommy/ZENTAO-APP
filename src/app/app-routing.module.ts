import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { TestComponent } from './test/test.component';
import { IterationComponent } from './iteration/iteration.component';
import { DocComponent } from './doc/doc.component';
import { ReportComponent } from './report/report.component';
import { CompanyComponent } from './company/company.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Zentao_login', component: LoginComponent, },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'iteration', component: IterationComponent },
  { path: 'test', component: TestComponent },
  { path: 'doc', component: DocComponent },
  { path: 'report', component: ReportComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'admin', component: AdminComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
