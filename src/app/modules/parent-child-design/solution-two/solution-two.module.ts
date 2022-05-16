import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './solution-two-routing.module';
import { SolutionTwoComponent } from './solution-two.component';

@NgModule({
  declarations: [
    SolutionTwoComponent
  ],
  imports: [
    CommonModule,
    TwoRoutingModule
  ]
})
export class SolutionTwoModule { }
