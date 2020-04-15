//  Modules installed
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




//  Components installed
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatmenuComponent } from './matmenu/matmenu.component';
import { DashboardComponent, BottomSheetOverviewExampleSheet } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { IterationComponent } from './iteration/iteration.component';
import { TestComponent } from './test/test.component';
import { DocComponent } from './doc/doc.component';
import { ReportComponent } from './report/report.component';
import { CompanyComponent } from './company/company.component';
import { AdminComponent } from './admin/admin.component';
import { MatWelcomeStepperComponent } from './mat-welcome-stepper/mat-welcome-stepper.component';
import { MatStepperloginHistoryComponent } from './mat-stepperlogin-history/mat-stepperlogin-history.component';
import { MyStoriesTableComponent } from './my-stories-table/my-stories-table.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateIterationComponent } from './create-iteration/create-iteration.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatmenuComponent,
    DashboardComponent,
    ProductComponent,
    IterationComponent,
    TestComponent,
    DocComponent,
    ReportComponent,
    CompanyComponent,
    AdminComponent,
    MatWelcomeStepperComponent,
    MatStepperloginHistoryComponent,
    BottomSheetOverviewExampleSheet,
    MyStoriesTableComponent,
    CreateProductComponent,
    CreateIterationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatStepperModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatRippleModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    MatExpansionModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
    

   
  ],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

