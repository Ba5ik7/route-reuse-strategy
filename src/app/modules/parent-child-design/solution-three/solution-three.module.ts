import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionThreeRoutingModule } from './solution-three-routing.module';
import { SolutionThreeComponent } from './solution-three.component';


@NgModule({
  declarations: [
    SolutionThreeComponent
  ],
  imports: [
    CommonModule,
    SolutionThreeRoutingModule
  ]
})
export class SolutionThreeModule { }
