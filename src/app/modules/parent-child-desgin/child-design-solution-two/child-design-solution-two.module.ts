import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildDesignSolutionTwoRoutingModule } from './child-design-solution-two-routing.module';
import { ChildDesignSolutionTwoComponent } from './child-design-solution-two.component';


@NgModule({
  declarations: [
    ChildDesignSolutionTwoComponent
  ],
  imports: [
    CommonModule,
    ChildDesignSolutionTwoRoutingModule
  ]
})
export class ChildDesignSolutionTwoModule { }
