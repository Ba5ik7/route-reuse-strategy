import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildDesginRoutingModule } from './parent-child-desgin-routing.module';
import { ParentChildDesginComponent } from './parent-child-desgin.component';


@NgModule({
  declarations: [
    ParentChildDesginComponent
  ],
  imports: [
    CommonModule,
    ParentChildDesginRoutingModule
  ]
})
export class ParentChildDesginModule { }
