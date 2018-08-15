import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScottsModuleComponent } from './scotts-module.component';
import { ScottsComponent001 } from './scotts-component-001';
const scottsRoutes: Routes = [
  { path: '', component: ScottsModuleComponent },
  { path: '1', component: ScottsComponent001 }
  ];

@NgModule({
  declarations: [
    ScottsModuleComponent,
    ScottsComponent001
  ],
  exports: [
    ScottsModuleComponent,
    ScottsComponent001
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(scottsRoutes)
  ]
})
export class ScottsModule { }


