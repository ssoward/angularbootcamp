import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HrFilesSearchComponent } from './hr-files/hr-files-search.component';
import { PayrollSearchComponent } from './payroll/payroll-search.component';
import { NewComponent } from './new-component/new.component';
import { SearchBoxComponent } from './search/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    NewComponent,
    HrFilesSearchComponent,
    PayrollSearchComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
