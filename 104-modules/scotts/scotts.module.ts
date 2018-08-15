import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScottsModuleComponent } from './scotts-module.component';

@NgModule({
  declarations: [
    ScottsModuleComponent
  ],
  exports: [
    ScottsModuleComponent
  ],
  imports: [CommonModule]
})
export class ScottsModule { }
