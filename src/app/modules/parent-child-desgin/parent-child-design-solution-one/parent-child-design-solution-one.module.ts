import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildDesignSolutionOneRoutingModule } from './parent-child-design-solution-one-routing.module';
import { ParentChildDesignSolutionOneComponent } from './parent-child-design-solution-one.component';


@NgModule({
  declarations: [
    ParentChildDesignSolutionOneComponent
  ],
  imports: [
    CommonModule,
    ParentChildDesignSolutionOneRoutingModule
  ]
})
export class ParentChildDesignSolutionOneModule { }
