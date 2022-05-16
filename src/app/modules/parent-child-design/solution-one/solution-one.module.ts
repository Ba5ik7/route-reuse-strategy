import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionOneRoutingModule } from './solution-one-routing.module';
import { SolutionOneComponent } from './solution-one.component';


@NgModule({
  declarations: [
    SolutionOneComponent
  ],
  imports: [
    CommonModule,
    SolutionOneRoutingModule
  ]
})
export class SolutionOneModule { }
