import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HrModule } from './hr-files/hr.module';
import { PayrollModule } from './payroll/payroll.module';
import { ScottsModule } from "./scotts/scotts.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [PayrollModule, HrModule, BrowserModule, ScottsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
