import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildDesignSolutionTwoComponent } from './parent-child-design-solution-two.component';

const routes: Routes = [{ path: '', component: ParentChildDesignSolutionTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentChildDesignSolutionTwoRoutingModule { }
