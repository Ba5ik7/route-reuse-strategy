import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildDesignSolutionThreeRoutingModule } from './parent-child-design-solution-three-routing.module';
import { ParentChildDesignSolutionThreeComponent } from './parent-child-design-solution-three.component';


@NgModule({
  declarations: [
    ParentChildDesignSolutionThreeComponent
  ],
  imports: [
    CommonModule,
    ParentChildDesignSolutionThreeRoutingModule
  ]
})
export class ParentChildDesignSolutionThreeModule { }
