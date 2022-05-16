import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildDesignSolutionTwoRoutingModule } from './parent-child-design-solution-two-routing.module';
import { ParentChildDesignSolutionTwoComponent } from './parent-child-design-solution-two.component';


@NgModule({
  declarations: [
    ParentChildDesignSolutionTwoComponent
  ],
  imports: [
    CommonModule,
    ParentChildDesignSolutionTwoRoutingModule
  ]
})
export class ParentChildDesignSolutionTwoModule { }
