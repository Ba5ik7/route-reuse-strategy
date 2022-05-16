import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildDesignSolutionThreeComponent } from './parent-child-design-solution-three.component';

const routes: Routes = [{ path: '', component: ParentChildDesignSolutionThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentChildDesignSolutionThreeRoutingModule { }
